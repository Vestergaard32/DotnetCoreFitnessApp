using Microsoft.EntityFrameworkCore;

namespace DotNetCoreFitnessApp.Models
{
    public class FitnessContext : DbContext
    {
        public FitnessContext(DbContextOptions<FitnessContext> options)
            : base(options)
        {
        }

        public DbSet<Workout> Workouts { get; set; }
        public DbSet<Exercise> Exercises { get; set; }
        public DbSet<Activity> Activities { get; set; }
        public DbSet<User> Users { get; set; }
    }
}