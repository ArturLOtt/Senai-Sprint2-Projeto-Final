using SPMEDGROUP_MANHA.Domains;
using SPMEDGROUP_MANHA.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPMEDGROUP_MANHA.Repositories
{
    public class ConsultaRepository : IConsultaRepository
    {

        SPMEDGROUPContext ctx = new SPMEDGROUPContext();

        public void Cadastrar(Consulta consulta)
        {

                ctx.Consulta.Add(consulta);
                ctx.SaveChanges();

        }

        public List<Consulta> Listar()
        {
            List<Consulta> jogosLista = new List<Consulta>();

                return ctx.Consulta.ToList();

        }

        public List<Consulta> ListarMinhasConsultas(int pegaUsuarioId, int tipoLogado)
        {
            List<Consulta> minhasConsultas = new List<Consulta>();

            switch (tipoLogado)
            {
                case 1:
                    TipoMedico medicoBuscado = ctx.TipoMedico.Where(m => m.IdUsuario == pegaUsuarioId).FirstOrDefault();

                    minhasConsultas = ctx.Consulta.ToList().FindAll(c => c.IdMedico == medicoBuscado.Id);

                    break;

                case 2:
                    ProntuarioPaciente prontuarioBuscado = ctx.ProntuarioPaciente.Where(p => p.IdUsuario == pegaUsuarioId).FirstOrDefault();

                    minhasConsultas = ctx.Consulta.ToList().FindAll(c => c.IdPaciente == prontuarioBuscado.Id);

                    break;
            }

            return minhasConsultas;

        }

/**/}
}
