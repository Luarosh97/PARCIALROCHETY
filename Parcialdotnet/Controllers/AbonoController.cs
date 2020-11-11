
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

     [Route("api/[Controller]")]
    [ApiController]
    public class AbonoController :ControllerBase
    {
        private readonly AbonoService _abonoService;

        public AbonoController(EmpresaContext context)
        {
            
            _abonoService= new AbonoService(context);
            

        }

       
        
         [HttpGet]
        public IEnumerable <AbonoViewModel> GetAll()
        {
            var abonos = _abonoService.ConsultarTodos().Select(p=> new AbonoViewModel(p));
            return abonos;
        }
        
         

         [HttpPost]
        public ActionResult<AbonoViewModel> Post(AbonoInputModel abonoInput)
        {
            Abono abono = MapearPersona(abonoInput);
            var response = _abonoService.Guardar(abono);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Abono);
        }

        private Abono MapearPersona(AbonoInputModel abonoInput)
        {
            var abono = new Abono
            {
                Fecha = abonoInput.Fecha,
                ValorAbono = abonoInput.ValorAbono,
                Idabono =abonoInput.Idabono,
                
            };
            return abono;
        }
    }
}
