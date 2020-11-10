using System;

namespace ENTITY
{
    public class Abono
    {
       
        
        public string Fecha { get; set; }

        public decimal ValorAbono { get; set; }

        public Credito credito { get; set; }

        public Abono() {
            credito = new Credito();
        }

    }
}
