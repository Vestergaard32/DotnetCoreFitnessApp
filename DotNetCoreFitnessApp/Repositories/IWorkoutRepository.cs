﻿using System.Collections.Generic;
using DotNetCoreFitnessApp.Models;

namespace DotNetCoreFitnessApp.Repositories
{
    public interface IWorkoutRepository
    {
        IEnumerable<Workout> GetAllWorkouts();
        IEnumerable<Workout> GetWorkoutsForUser(string userId);
        void AddWorkout(string userId, string workoutName);
        void DeleteWorkout(int workoutId);
    }
}