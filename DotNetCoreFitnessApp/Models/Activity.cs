using System;

namespace DotNetCoreFitnessApp.Models
{
    public class Activity
    {
        public int ActivityId { get; set; }
        public DateTime TimeStamp { get; set; }
        public string Description { get; set; }
    }
}