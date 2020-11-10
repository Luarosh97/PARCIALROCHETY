using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ENTITY;
using BLL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Parcialdotnet.Models;
using DAL;
using System;

namespace Parcialdotnet.Controllers
{   
  [Route("api/[Credito]")]
   [ApiController]
    public class CreditoController:ControllerBase
    {
        private readonly CreditoService _creditoService;
       
        public CreditoController(EmpresaContext context)
        {
            
            _creditoService= new CreditoService(context);
        
        }

         [HttpGet]
        public IEnumerable <CreditoViewModel> GetAll()
        {
            var creditos = _creditoService.ConsultarTodos().Select(p=> new CreditoViewModel(p));
            return creditos;
        }

         [HttpPost]
        public ActionResult<CreditoViewModel> Post(CreditoInputModel creditoInput)
        {
            Credito credito = MapearPersona(creditoInput);
            var response = _creditoService.Guardar(credito);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Credito);
        }

        private Credito MapearPersona(CreditoInputModel creditoInput)
        {
            var credito = new Credito
            {
                Identificacion = creditoInput.Identificacion,
                Nombre = creditoInput.Nombre,
                CantidadEmp=creditoInput.CantidadEmp,
                ValorActivo=creditoInput.ValorActivo,
                ValorCredito=creditoInput.ValorCredito
            };
            return credito;
            
        }
    }
}
