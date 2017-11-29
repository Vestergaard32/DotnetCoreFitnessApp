using System.IO;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DotNetCoreFitnessApp.Models
{
    public class FitnessContext : IdentityDbContext<User>
    {
        public FitnessContext(DbContextOptions<FitnessContext> options)
            : base(options)
        {
                
        }
        
        public FitnessContext(){}

        public DbSet<Workout> Workouts { get; set; }
        public DbSet<Exercise> Exercises { get; set; }
        public DbSet<Activity> Activities { get; set; }
    }
}