using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SPMEDGROUP_MANHA.Domains;
using SPMEDGROUP_MANHA.Interfaces;
using SPMEDGROUP_MANHA.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SPMEDGROUP_MANHA.Controllers
{

    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ConsultaController : ControllerBase
    {

        private IConsultaRepository ConsultaRepository { get; set; }

        public ConsultaController() => ConsultaRepository = new ConsultaRepository();

        UsuarioRepository usuarioRepository = new UsuarioRepository();

        [HttpPost]
        public IActionResult Post(Consulta consulta)
        {
            try
            {
                using (SPMEDGROUPContext ctx = new SPMEDGROUPContext())
                {
                    ctx.Consulta.Add(consulta);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                using (SPMEDGROUPContext ctx = new SPMEDGROUPContext())
                {
                    return Ok(ctx.Consulta.ToList());
                }
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }

        [HttpGet("MinhasConsultas")]
        [Authorize(Roles = "1, 2")]
        public IActionResult GetDoPaciente()
        {
            try
            {
                using (SPMEDGROUPContext ctx = new SPMEDGROUPContext())
                {
                    int pegaUsuarioId = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                    int tipoLogado = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == ClaimTypes.Role).Value);

                    // Busca um usuário através do id logado
                    Usuarios usuarioLogado = usuarioRepository.BuscarPorId(tipoLogado);

                    // Busca todas as consultas do usuário passando o id do usuário e o perfil deste usuário logado
                    List<Consulta> minhasConsultas = ConsultaRepository.ListarMinhasConsultas(pegaUsuarioId, tipoLogado);

                    if (minhasConsultas == null)
                    {
                        // Caso o objeto minhasConsultas seja nulo, retorna NotFound e a mensagem
                        return NotFound(new { mensagem = "Nenhuma consulta encontrada" });
                    }


                    if (minhasConsultas.Count() == 0)
                    {
                        // Caso ainda não tenha nenhuma consulta agendada para este usuário, retorna a mensagem
                        return Ok(new { mensagem = "Não há consultas agendadas" });
                    }

                    return Ok(minhasConsultas);
                }



            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
                                           
        [HttpPut("Descricao")]
        [Authorize(Roles = "3, 1")]
        public IActionResult PutDescricao(Consulta consulta)
        {

            try
            {
                using (SPMEDGROUPContext ctx = new SPMEDGROUPContext())
                {

                    using (var context = new SPMEDGROUPContext())
                    {
                        var std = context.Consulta.Find(consulta.Id);
                        std.Descricao = consulta.Descricao;
                        context.SaveChanges();
                    }
                }
                return Ok();
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }
        
        [HttpPut("Status")]
        [Authorize(Roles = "3")]
        public IActionResult PutStatus(Consulta consulta)
        {
            try
            {
                using (SPMEDGROUPContext ctx = new SPMEDGROUPContext())
                {

                    using (var context = new SPMEDGROUPContext())
                    {
                        var std = context.Consulta.Find(consulta.Id);
                        std.IdStatusConsulta = consulta.IdStatusConsulta;
                        context.SaveChanges();
                    }
                }
                return Ok();
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }

        
/**/}
}
