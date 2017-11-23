namespace DotNetCoreFitnessApp.Models
{
    public class Exercise
    {
        public int ExerciseId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Sets { get; set; }
        public string Reps { get; set; }
    }
}