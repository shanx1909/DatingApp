
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{   
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;

        public ValuesController(DataContext context)
        {
            _context = context;
        }

// GetValues is returning an action results of an innumerable of string.
// And in this case it's a collection of strings which we're returning but we want remove this and instead
// of an action result. we'll just use the IActionResult.
// This allows us to return HTTP responses to the client so instead of just returning strings we can
// return an OK which will return a http 200 response.


#region  Async GET METHODS

        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var valuesResult = await _context.Values.ToListAsync();
            return Ok(valuesResult);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var valuesResult = await _context.Values.FirstOrDefaultAsync(x=>x.Id == id);
            return Ok(valuesResult);
        }

#endregion


#region Sync  GET METHODS      

// GET api/values
        // [HttpGet]
        // public IActionResult GetValues()
        // {
        //     var valuesResult = _context.Values.ToList();
        //     return Ok(valuesResult);
        // }

        // // GET api/values/5
        // [HttpGet("{id}")]
        // public IActionResult GetValue(int id)
        // {
        //     var valuesResult = _context.Values.FirstOrDefault(x=>x.Id == id);
        //     return Ok(valuesResult);
        // }

#endregion


        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }    
}