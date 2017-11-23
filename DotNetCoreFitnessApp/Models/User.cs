using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace DotNetCoreFitnessApp.Models
{
    public class User : IdentityUser
    {
        public List<Workout> Workouts { get; set; }
    }
}