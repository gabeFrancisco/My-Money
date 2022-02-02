using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyMoney.Api.Models.Interfaces;

namespace MyMoney.Api.Controllers
{
    [Route("api/[controller]")]
    public class BillingCyclesController : ControllerBase
    {
        private readonly IBillingCycleService _billingCycleService;

        public BillingCyclesController(IBillingCycleService billingCycleService)
        {
            _billingCycleService = billingCycleService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _billingCycleService.GetAll());
            }
            catch (ArgumentException ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}