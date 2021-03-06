using System;
using System.ComponentModel.DataAnnotations;

namespace ENTITY
{
    public class Credito
    {
        [Key]
        public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public int CantidadEmp { get; set; }
        public decimal ValorActivo { get; set; }
        public decimal ValorCredito { get; set;}
    }
}
