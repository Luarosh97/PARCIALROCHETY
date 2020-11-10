using System;
using ENTITY;

namespace Parcialdotnet.Models
{
    public class CreditoInputModel
    {
        public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public int CantidadEmp { get; set; }
        public decimal ValorActivo { get; set; }
        public decimal ValorCredito { get; set;}
    }

    public class CreditoViewModel : CreditoInputModel
    {
        public CreditoViewModel()
        {

        }
        public CreditoViewModel(Credito credito)
        {
            Identificacion = credito.Identificacion;
            Nombre = credito.Nombre;
            CantidadEmp = credito.CantidadEmp ;
            ValorActivo  = credito.ValorActivo;

            ValorCredito = credito.ValorCredito;
        }
        
  }
}
