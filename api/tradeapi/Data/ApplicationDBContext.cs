using Microsoft.EntityFrameworkCore;

namespace tradeapi.Data;


public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
}