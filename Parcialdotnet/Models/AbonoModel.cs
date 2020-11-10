using System;
using ENTITY;

namespace Parcialdotnet.Models
{
    public class AbonoInputModel
    {
        
       
        public string Fecha { get; set; }
        
        public decimal ValorAbono { get; set; }
        
        public string Idabono {get;set;}
    }

    public class AbonoViewModel: AbonoInputModel
    {
        public AbonoViewModel() { }
        public AbonoViewModel(Abono abono)
        {
            Fecha = abono.Fecha;
            ValorAbono = abono.ValorAbono;
            
            Idabono=abono.Idabono;
        }
    }
    
}
