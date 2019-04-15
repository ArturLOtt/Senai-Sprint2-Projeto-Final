using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SPMEDGROUP_MANHA.Domains;
using SPMEDGROUP_MANHA.Interfaces;
using SPMEDGROUP_MANHA.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace SPMEDGROUP_MANHA.Controllers
{

    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        private IUsuarioRepository usuarioRepository { get; set; }

        public UsuarioController() => usuarioRepository = new UsuarioRepository();

        [Authorize(Roles = "3")]
        [HttpPost]
        public IActionResult Post(Usuarios usuario)
        {
            try
            {
                using (SPMEDGROUPContext ctx = new SPMEDGROUPContext())
                {
                    ctx.Usuarios.Add(usuario);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }

        /*

        [HttpGet]
        public IActionResult listarUsuarioTipo()
        {
            try
            {

                using (SPMEDGROUPContext ctx = new SPMEDGROUPContext())
                {

                    var pegaUsuarioId = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                    /*
                    var pegaOTipoPaciente = ctx.ProntuarioPaciente.Find(pegaUsuarioId.     ctx.Usuarios./*Id_usuario  { { { { aqui colocar o que recebe ao fazer login } } } } */ /*   );

                /*    return Ok( /* { { { colocar aqui a lista de consulta => SequencePosition der para fazer tudo numa função só, mudar esse codigo para o ConsultaController } } } */     /*    .Usuarios.Where.Consulta.ToList()); */
        /*
                }
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
        */




        /*


                [Authorize(Roles = "3")] //Somente o paciente pode listar as próprias consultas!
        [HttpGet("ListardoPaciente")]
        public IActionResult ListardoPaciente()
        {
            try
            {
                int usuarioid = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(ConsultaRepository.ListardoPaciente(usuarioid));
            }
            catch (Exception ex)
            {
                return BadRequest("Algo deu errado :/");
            }
        }



        */



        /**/
    }
}
