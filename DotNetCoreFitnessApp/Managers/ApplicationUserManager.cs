using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DotNetCoreFitnessApp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace DotNetCoreFitnessApp.Managers
{
    public class ApplicationUserManager : UserManager<User>
    {
        public ApplicationUserManager(IUserStore<User> store, IOptions<IdentityOptions> optionsAccessor, IPasswordHasher<User> passwordHasher, IEnumerable<IUserValidator<User>> userValidators, IEnumerable<IPasswordValidator<User>> passwordValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, IServiceProvider services, ILogger<UserManager<User>> logger) : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)
        {
        }

        public override Task<User> FindByNameAsync(string name)
        {
            return Users.Include(user => user.Workouts)
                        .ThenInclude(x => x.Exercises)
                        .Include(x => x.Workouts)
                        .ThenInclude(x => x.Activities)
                        .FirstOrDefaultAsync(user => user.UserName == name);
        }
    }
}