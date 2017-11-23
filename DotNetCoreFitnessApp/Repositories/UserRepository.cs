using DotNetCoreFitnessApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace DotNetCoreFitnessApp.Repositories
{
    public class UserRepository : IUserRepository
    {
        private FitnessContext _fitnessContext;

        public UserRepository(FitnessContext fitnessContext)
        {
            _fitnessContext = fitnessContext;
        }

        public void CreateUser(string username, string password)
        {
            
        }
    }
}