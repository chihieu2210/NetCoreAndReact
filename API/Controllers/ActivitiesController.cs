using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Activities;

namespace API.Controllers
{
  public class ActivitiesController : BaseApiController
  {
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
      return Mediator != null ? await Mediator.Send(new List.Query()) : new List<Activity>();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
      return await Mediator.Send(new Details.Query { Id = id });
    }

    [HttpPost]
    public async Task<ActionResult> CreateActivity([FromBody] Activity activity)
    {
      return Ok(await Mediator.Send(new Create.Command { Activity = activity }));
    }
  }
}