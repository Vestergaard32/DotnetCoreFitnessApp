using System.Linq;
using System.Threading.Tasks;
using DotNetCoreFitnessApp.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreFitnessApp.Controllers
{
    [Route("api/Workouts")]
    public class WorkoutController : Controller
    {
        private readonly IWorkoutRepository _workoutRepository;
        
        public WorkoutController(IWorkoutRepository workoutRepository)
        {
            _workoutRepository = workoutRepository;
        }
        
        [HttpGet]
        public IActionResult GetAllWorkouts()
        {
            var workouts = _workoutRepository.GetAllWorkouts();
            return Ok(workouts);
        }
    }
}