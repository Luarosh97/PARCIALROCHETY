using System;
using System.Collections.Generic;
using System.Linq;
using DAL;
using ENTITY;

namespace BLL
{
    public class AbonoService
    {
        private readonly EmpresaContext _context;

        public AbonoService(EmpresaContext contexto)
        {
            _context = contexto;
        }
        public GuardarAbonoResponse Guardar(Abono abono)
        {
            try
            {
                
                var abonobuscado = _context.Abonos.Find(abono.Idabono);
                if(abonobuscado   != null){
                    return new GuardarAbonoResponse("Error el abono Ya se encuentra registrada");
                }
                   
                 _context.Abonos.Add(abono);
                _context.SaveChanges();
                
                
                return new GuardarAbonoResponse(abono);
            }
           
            catch (Exception e)
            {
                return new GuardarAbonoResponse($"Error de la Aplicacion: {e.Message}");
            }
            
        }

       

        public List<Abono> ConsultarTodos()
        {
            
            List<Abono> abonos = _context.Abonos.ToList();
            return abonos;
        }



    }

    public class GuardarAbonoResponse
    {
        public GuardarAbonoResponse(Abono abono)
        {
            Error = false;
            Abono= abono;
        }
        public GuardarAbonoResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Abono Abono{ get; set; }
    }

}
