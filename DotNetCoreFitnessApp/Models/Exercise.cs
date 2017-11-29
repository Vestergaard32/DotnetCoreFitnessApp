using Newtonsoft.Json;

namespace DotNetCoreFitnessApp.Models
{
    public class Exercise
    {
        [JsonProperty(PropertyName = "_id")]
        public int ExerciseId { get; set; }

        [JsonProperty(PropertyName = "exerciseName")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "sets")]
        public int Sets { get; set; }

        [JsonProperty(PropertyName = "reps")]
        public string Reps { get; set; }
    }
}