using System.Collections.Generic;
using System.Linq;
using DotNetCoreFitnessApp.Models;
using Microsoft.EntityFrameworkCore;

namespace DotNetCoreFitnessApp.Repositories
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class WorkoutRepository : IWorkoutRepository
    {
        private readonly FitnessContext dbContext;

        public WorkoutRepository(FitnessContext dbContext)
        {
            this.dbContext = dbContext;
        }
        
        public IEnumerable<Workout> GetAllWorkouts()
        {
            return dbContext.Workouts
                .Include(workout => workout.Activities)
                .Include(workout => workout.Exercises)
                .ToList();
        }

        public IEnumerable<Workout> GetWorkoutsForUser(string userId)
        {
            var user = dbContext.Users
                .Include(u => u.Workouts).ThenInclude(s => s.Activities)
                .Include(u => u.Workouts).ThenInclude(s => s.Exercises)
                .FirstOrDefault(u => u.Id == userId);
           
            return user.Workouts;
        }

        public void AddWorkout(string userId, string workoutName)
        {
            var user = dbContext.Users
                .Include(u => u.Workouts)
                .FirstOrDefault(u => u.Id == userId);
            
            user.Workouts.Add(new Workout{Name = workoutName});
            dbContext.SaveChanges();
        }

        public void DeleteWorkout(int workoutId)
        {
            var workout = dbContext.Workouts.Find(workoutId);
            dbContext.Workouts.Remove(workout);
            dbContext.SaveChanges();
        }
    }    
}