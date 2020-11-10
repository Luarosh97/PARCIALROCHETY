using System;
using System.ComponentModel.DataAnnotations;

namespace ENTITY
{
    public class Abono
    {
       
        
        public string Fecha { get; set; }

        public decimal ValorAbono { get; set; }
         
          [Key]
        public string Idabono { get; set; }

        

    }
}
