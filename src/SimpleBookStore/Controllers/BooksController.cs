using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SimpleBookStore.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace SimpleBookStore.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        private readonly IList<Book> Books = new List<Book> {
                new Book {Id=1, Title="The Catcher in the Rye", Author="J. D. Salinger", Genre=BookGenre.Romance, Publisher="Little, Brown and Company", Year=1951},
                new Book {Id=2, Title="Lord of the Flies", Author="William Golding", Genre=BookGenre.Romance, Publisher="Faber and Faber", Year=1954},
                new Book {Id=3, Title="Gulliver's Travels", Author="Jonathan Swift", Genre=BookGenre.Fantasy, Publisher="Benjamin Motte", Year=1726}
        };

        // GET: api/values
        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return Books;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Book Get(int id)
        {
            return Books.SingleOrDefault(b => b.Id.Equals(id));
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
