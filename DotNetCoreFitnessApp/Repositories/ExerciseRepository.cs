using System.Linq;
using DotNetCoreFitnessApp.Models;
using Microsoft.EntityFrameworkCore;

namespace DotNetCoreFitnessApp.Repositories
{
    public class ExerciseRepository : IExerciseRepository
    {
        private readonly FitnessContext _dbContext;

        public ExerciseRepository(FitnessContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void AddExercise(string userId, int workoutId, Exercise exercise)
        {
            var user = _dbContext.Users
                .Include(u => u.Workouts)
                .First(user1 => user1.Id == userId);

            var workout = user.Workouts.FirstOrDefault(workout1 => workout1.WorkoutId == workoutId);
            workout?.Exercises.Add(exercise);

            _dbContext.SaveChanges();
        }
    }
}