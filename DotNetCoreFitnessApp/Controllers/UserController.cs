﻿using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DotNetCoreFitnessApp.Managers;
using DotNetCoreFitnessApp.Models;
using DotNetCoreFitnessApp.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace DotNetCoreFitnessApp.Controllers
{
    [Route("api/Users")]
    public class UserController : Controller
    {
        private readonly IOptions<AppSettings> _appSettings;

        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        private readonly IWorkoutRepository _workoutRepository;
        private readonly IExerciseRepository _exerciseRepository;
        
        public UserController(
            IOptions<AppSettings> appSettings,
            ApplicationUserManager userManager, 
            SignInManager<User> signInManager, 
            IWorkoutRepository workoutRepository, 
            IExerciseRepository exerciseRepository)
        {
            _appSettings = appSettings;

            _userManager = userManager;
            _signInManager = signInManager;
            _workoutRepository = workoutRepository;
            _exerciseRepository = exerciseRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserRegistrationInput userRegistrationInput)
        {
            var newUser = new User
            {
                UserName = userRegistrationInput.Username
            };

            var userRegistrationResult = await _userManager.CreateAsync(newUser, userRegistrationInput.Password);
            var createdUser = await _userManager.FindByNameAsync(userRegistrationInput.Username);

            if (userRegistrationResult.Succeeded)
            {
                var jwtToken = GenerateJwtToken(userRegistrationInput.Username);

                return new ObjectResult(JsonConvert.SerializeObject(new
                {
                    Message = "User was registered successfully",
                    userid = createdUser.Id,
                    username = createdUser.UserName,
                    token = jwtToken
                }));
            }

            foreach (var registrationErrror in userRegistrationResult.Errors)
            {
                ModelState.AddModelError(string.Empty, registrationErrror.Description);
            }

            return BadRequest(ModelState);
        }

        [HttpPost, Route("login")]
        public async Task<IActionResult> Login([FromBody] UserRegistrationInput loginInput)
        {
            var loginResult = await _signInManager.PasswordSignInAsync(loginInput.Username, loginInput.Password, false,false);
            if (!loginResult.Succeeded) return Unauthorized();
            var token = GenerateJwtToken(loginInput.Username);
            var user = await _userManager.FindByNameAsync(loginInput.Username);
            
            return Ok(JsonConvert.SerializeObject(new
            {
                Message = "User has signed in",
                userid = user.Id,
                username = user.UserName,
                workoutprograms = user.Workouts,
                token = token
            }));
        }

        [HttpDelete, Route("{userId}/Workouts/{workoutId}")]
        public async Task<IActionResult> DeleteWorkout(string userId, int workoutId)
        {
            _workoutRepository.DeleteWorkout(userId, workoutId);
            var workouts = _workoutRepository.GetWorkoutsForUser(userId);
            var user = await _userManager.FindByIdAsync(userId);
            return Ok(JsonConvert.SerializeObject(new
            {
                userid = user.Id,
                username = user.UserName,
                workoutprograms = workouts
            }));
        }

        [HttpPost, Route("{userId}/Workouts")]
        public async Task<IActionResult> CreateWorkout(string userId, [FromBody]CreateWorkoutInputModel inputModel)
        {
            _workoutRepository.AddWorkout(userId, inputModel.WorkoutName);

            var workoutPrograms = _workoutRepository.GetWorkoutsForUser(userId);
            var associatedUser = await _userManager.FindByIdAsync(userId);

            return Ok(JsonConvert.SerializeObject(new
            {
                userid = userId,
                username = associatedUser.UserName,
                workoutprograms = workoutPrograms
            }));
        }

        [HttpPost, Route("{userId}/Workouts/{workoutId}/Exercises")]
        public async Task<IActionResult> CreateExercise(string userId, int workoutId, [FromBody] Exercise newExercise)
        {
            _exerciseRepository.AddExercise(userId, workoutId, newExercise);
            var associatedUser = await _userManager.FindByIdAsync(userId);
            var workouts = _workoutRepository.GetWorkoutsForUser(userId);
            
            return Ok(JsonConvert.SerializeObject(new
            {
                userid = userId,
                username = associatedUser.UserName,
                workoutprograms = workouts
            }));
        }

        [HttpDelete, Route("{userId}/Workouts/{workoutId}/Exercises/{exerciseId}")]
        public async Task<IActionResult> RemoveExercise(string userId, int workoutId, string exerciseId)
        {
            _exerciseRepository.RemoveExercise(exerciseId);
            var associatedUser = await _userManager.FindByIdAsync(userId);
            var workouts = _workoutRepository.GetWorkoutsForUser(userId);

            return Ok(JsonConvert.SerializeObject(new
            {
                userid = userId,
                username = associatedUser.UserName,
                workoutprograms = workouts
            }));
        }

        [HttpPost, Route("{userId}/Workouts/{workoutId}/workoutActivities")]
        public async Task<IActionResult> LogActivity(string userId, int workoutId)
        {
            _workoutRepository.LogActivity(userId, workoutId);

            var associatedUser = await _userManager.FindByIdAsync(userId);
            var workouts = _workoutRepository.GetWorkoutsForUser(userId);

            return Ok(JsonConvert.SerializeObject(new
            {
                userid = userId,
                username = associatedUser.UserName,
                workoutprograms = workouts
            }));
        }

        private string GenerateJwtToken(string username)
        {
            // The claims is the information we want our JWT to carry in its payload
            // In this case, we make it carry a username,
            // NBF (The time before which the JWT must NOT be accepted for processing
            // EXP (Defines the expiration of the JWT)
            // We use these claims when building the JWT
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(JwtRegisteredClaimNames.Nbf,
                    new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds().ToString()),
                new Claim(JwtRegisteredClaimNames.Exp, 
                    new DateTimeOffset(DateTime.Now.AddHours(1)).ToUnixTimeSeconds().ToString()) 
            };

            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_appSettings.Value.Secret)),
                SecurityAlgorithms.HmacSha256);

            var jwtHeader = new JwtHeader(signingCredentials);
            var jwtPayload = new JwtPayload(claims);
            var jwtToken = new JwtSecurityToken(jwtHeader, jwtPayload);

            return new JwtSecurityTokenHandler().WriteToken(jwtToken);
        }
    }
}
