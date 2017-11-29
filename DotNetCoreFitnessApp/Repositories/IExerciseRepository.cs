using DotNetCoreFitnessApp.Models;

namespace DotNetCoreFitnessApp.Repositories
{
    public interface IExerciseRepository
    {
        void AddExercise(string userId, int workoutId, Exercise exercise);
        void RemoveExercise(string exerciseId);
    }
}