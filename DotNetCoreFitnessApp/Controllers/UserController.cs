using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DotNetCoreFitnessApp.Models;
using DotNetCoreFitnessApp.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DotNetCoreFitnessApp.Controllers
{
    [Route("api/User")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly IOptions<AppSettings> _appSettings;

        public UserController(IUserRepository userRepository, IOptions<AppSettings> appSettings)
        {
            _userRepository = userRepository;
            _appSettings = appSettings;
        }

        [HttpPost]
        public IActionResult CreateUser([FromBody] UserRegistrationInput userRegistrationInput)
        {
            string jwtToken = GenerateJwtToken(userRegistrationInput.Username);

            return Ok();
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
