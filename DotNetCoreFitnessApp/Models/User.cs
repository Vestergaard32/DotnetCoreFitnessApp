using System.Collections.Generic;

namespace DotNetCoreFitnessApp.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public List<Workout> Workouts { get; set; }
    }
}