using System.Collections.Generic;
using Newtonsoft.Json;

namespace DotNetCoreFitnessApp.Models
{
    public class Workout
    {
        public Workout()
        {
            Exercises = new List<Exercise>();
            Activities = new List<Activity>();
        }

        [JsonProperty(PropertyName = "_id")]
        public int WorkoutId { get; set; }

        [JsonProperty(PropertyName = "workoutName")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "exercises")]
        public List<Exercise> Exercises { get; set; }

        [JsonProperty(PropertyName = "activities")]
        public List<Activity> Activities { get; set; }
    }
}