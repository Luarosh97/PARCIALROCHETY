using System;
using ENTITY;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class EmpresaContext:DbContext
    {
        public EmpresaContext(DbContextOptions options) : base (options){
      
      }
      public DbSet <Credito> Creditos {get;set;}
      public DbSet <Abono> abonos {get;set;}

    }
}
