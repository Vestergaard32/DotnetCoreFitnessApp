using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DotNetCoreFitnessApp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace DotNetCoreFitnessApp.Controllers
{
    [Route("api/User")]
    public class UserController : Controller
    {
        private readonly IOptions<AppSettings> _appSettings;

        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserController(IOptions<AppSettings> appSettings,
                                UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _appSettings = appSettings;

            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserRegistrationInput userRegistrationInput)
        {
            User newUser = new User
            {
                UserName = userRegistrationInput.Username
            };

            var userRegistrationResult = await _userManager.CreateAsync(newUser, userRegistrationInput.Password);
            var createdUser = await _userManager.FindByNameAsync(userRegistrationInput.Username);

            if (userRegistrationResult.Succeeded)
            {
                string jwtToken = GenerateJwtToken(userRegistrationInput.Username);

                return new ObjectResult(JsonConvert.SerializeObject(new
                {
                    Message = "User was registered successfully",
                    UserId = createdUser.Id,
                    UserName = createdUser.UserName,
                    Token = jwtToken
                }));
            }

            foreach (var registrationErrror in userRegistrationResult.Errors)
            {
                ModelState.AddModelError(string.Empty, registrationErrror.Description);
            }

            return BadRequest(ModelState);
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
