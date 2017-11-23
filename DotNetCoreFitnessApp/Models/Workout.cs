using System.Collections.Generic;

namespace DotNetCoreFitnessApp.Models
{
    public class Workout
    {
        public int WorkoutId { get; set; }
        public string Name { get; set; }
        public List<Exercise> Exercises { get; set; }
        public List<Activity> Activities { get; set; }
    }
}