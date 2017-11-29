using System;
using Newtonsoft.Json;

namespace DotNetCoreFitnessApp.Models
{
    public class Activity
    {
        [JsonProperty(PropertyName = "_id")]
        public int ActivityId { get; set; }

        [JsonProperty(PropertyName = "timestamp")]
        public DateTime TimeStamp { get; set; }

        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
    }
}