using DatingApp.API.Controllers.Models;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {

        //Here we pass the DataContext class in DbContextOptions as we are creating
        public DataContext(DbContextOptions<DataContext> options)
        : base(options)
        {
        }

        //Creating entities
        //Here Values is the table name, Value is the model class
        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users { get; set; }

    }
}