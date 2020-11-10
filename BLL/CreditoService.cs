using System;
using System.Collections.Generic;
using System.Linq;
using DAL;
using ENTITY;

namespace BLL
{
    public class CreditoService
    {
        
        private readonly EmpresaContext _context;

        public CreditoService(EmpresaContext contexto)
        {
            _context = contexto;
        }
         public GuardarPersonaResponse Guardar(Credito credito)
        {
            try
            {
                
                var creditobuscado = _context.Creditos.Find(credito.Identificacion);
                if(creditobuscado  != null){
                    return new GuardarPersonaResponse("Error El credito Ya se encuentra registrada");
                }
                 _context.Creditos.Add(credito);
                _context.SaveChanges();
                
                
                return new GuardarPersonaResponse(credito);
            }
           
            catch (Exception e)
            {
                return new GuardarPersonaResponse($"Error de la Aplicacion: {e.Message}");
            }
            
        }
        public List<Credito> ConsultarTodos()
        {
            
            List<Credito> creditos = _context.Creditos.ToList();
            return creditos;
        }
    }
    public class GuardarPersonaResponse 
    {
        public GuardarPersonaResponse(Credito credito)
        {
            Error = false;
            Credito= credito;
        }
        public GuardarPersonaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Credito Credito { get; set; }
    }
    


}
