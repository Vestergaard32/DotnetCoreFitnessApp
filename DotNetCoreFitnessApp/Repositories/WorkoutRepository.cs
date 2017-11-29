using System;
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

        public void DeleteWorkout(string userId, int workoutId)
        {
            var user = dbContext.Users
                .Include(u => u.Workouts)
                .FirstOrDefault(u => u.Id == userId);

            var workout = user.Workouts.FirstOrDefault(x => x.WorkoutId == workoutId);

            user.Workouts.Remove(workout);

            dbContext.SaveChanges();
        }

        public void LogActivity(string userId, int workoutId)
        {
            var workout = dbContext.Workouts.Where(x => x.WorkoutId == workoutId)
                                            .Include(a => a.Activities)
                                            .FirstOrDefault();

            workout.Activities.Add(new Activity
            {
                Description = "Workout Completed",
                TimeStamp = DateTime.Now
            });

            dbContext.SaveChanges();
        }
    }    
}