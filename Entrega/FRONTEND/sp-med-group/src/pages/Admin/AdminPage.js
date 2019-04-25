import React, { Component } from "react";
import BottonLine from "../../components/Botton/BottomLine";
import TopLine from "../../components/Top/TopLine";
import { parseJwt } from '../../services/auth'
import CardConsultas from '../../components/Cards-consultas/CardConsulta'
import axios from "axios";

class AdminPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOn: true
  //   };
  // }

//   constructor(){
//     super();
//     this.state = {
//       lista : [],
//       wishDescription: "",
//       tituloPagina : "Página do Admin"
//     }

//     this.listarDesejos = this.listarDesejos.bind(this);
//     this.atualizaDesejos = this.atualizaDesejos.bind(this);
//     this.adicionarDesejo = this.adicionarDesejo.bind(this);
// }

    constructor() {
      super();
      // this.credencial = Object.values(parseJwt())[2]
      // this.carregarDados();
      // // this.listarConsultas();

      this.state = {
          listaconsultas: []
      }
  }

  // componentDidMount() {
  //   axios.get(`http://http://localhost:5000/api/Consulta`)
  //     .then(res => {
  //       const listaconsultas = res.data;
  //       this.setState({ listaconsultas });
  //     })
  // }

  listarConsultas(){
      fetch('http://localhost:5000/api/Consulta')
        .then(resposta => resposta.json())
        .then(data => this.setState({lista : data}))
        .catch((erro) => console.log(erro))
  }

  carregarDados() {

      fetch('http://localhost:5000/api/Consulta',
          {
              // body : JSON.stringify({ wishDescription : this.state.wishDescription }),
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + localStorage.getItem("usuario")
              }
          })
          .then(response => response.json())
          .then(data => this.setState({ listaconsultas: data }))
          .catch(erro => console.log(erro))
  }

  listarCardConsultas() {
    let card = document.createElement("CardConsulta")
    let quadro = document.getElementById("fundo-cards")
    quadro.appendChild(card)
    // document.body.appendChild(card)
  }

  componentDidMount(){   this.listarConsultas();   }

  atualizarConsultas(event){  this.setState({ ConsultasDescricao : event.target.value });  }

  adicionarConsulta(event){
  event.preventDefault();
    
    fetch('http://localhost:5000/api/wishes',
    {
      method: 'POST',
      body : JSON.stringify({ ConsultasDescricao : this.state.ConsultasDescricao }),
          headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + localStorage.getItem("usuario")
          }
        })
        .then(resposta => console.log(resposta))
        .then(this.listarConsultas())
        .catch(erro => console.log(erro))
  }


  // toggle = () => { this.setState({isOn: !this.state.isOn})  }
 
  

  render() {
    return (
      <div>
        <TopLine />
        <div>
          <h2>Area do Administrador</h2>

          <ul>
        { this.state.listaconsultas.map(listaconsultas => <li>{listaconsultas.descricao}</li>)}
          </ul>
          <div>
          {this.state.listaconsultas.map(chave => {
          return (<CardConsultas 
          especialidade="Especialidade" 
          medico={chave.ID_MEDICO} 
          data={chave.DATA_AGENDAMENTO} 
          status={chave.ID_STATUS_CONSULTA} />) })}  
   {/* <Card especialidade="Neurologia" medico="Helena" data="10/10/2019" hora="19:00" status="Realizada" /> */}
                                  
          </div>

          <hr />        

          <h2>Cadastro</h2>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="" />
              Usuario
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="" />
              Cliente
            </label>
          </div>

          {/* <button onClick={this.toggle}>          {this.state.isOn ? 'On' : 'Off'}        </button> */}

        </div>

        <form>
            <input
              style={{
                border: "solid 1px",
                borderColor: "blue",
                borderRadius: "4px"
              }}
            />
          </form>

        <BottonLine />
      </div>
    );
  }
}


export default AdminPage;




//   render() {
//     return (
//       <div className="imagem">

//         <main className="conteudoPrincipal">
//           <section className="conteudoPrincipal-cadastro">

//             <div className="container" id="conteudoPrincipal-lista">
//               <table className="table table"id="tabela-lista">
//                 <thead className="cor">
//                   <tr className="table-primary">
//                     <th>#</th>
//                     <th>Data Criação</th>
//                     <th>Desejos</th>
//                   </tr>
//                 </thead>
//                 <tbody className="cor">
//                     {
//                         this.state.lista.map(function(wishes){
//                             return (
//                                 <tr key = {wishes.wishId}>
//                                     <td scope="col">{wishes.wishId}</td>
//                                     <td scope="col">{wishes.wishCreation}</td>
//                                     <td scope="col">{wishes.wishDescription}</td>
//                                 </tr>
//                             );
//                         })
//                     }
//                 </tbody>
//               </table>
//             </div>

//             <div className="container" id="conteudoPrincipal-cadastro">

//               <form onSubmit={this.adicionarDesejo}>
//                 <div className="container">
//                   <input
//                     type="text"
//                     value={this.state.wishDescription}
//                     onChange={this.atualizaDesejos}
//                     id="desejo"
//                     placeholder="faça seu desejo"
//                   />
                  
//                   <button className="btn btn-lg btn-primary text-uppercase">
//                     Cadastrar
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </section>
//         </main>

//       </div>
//     );
//   }
// }



















// class Consultas extends Component {


//     carregarDados() {

//         fetch('https://spmedgroup.azurewebsites.net/api/consultas',
//             {
//                 // body : JSON.stringify({ wishDescription : this.state.wishDescription }),
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": "Bearer " + localStorage.getItem("usuario")
//                 }
//             })
//             .then(response => response.json())
//             .then(data => this.setState({ listaconsultas: data }))
//             .catch(erro => console.log(erro))

//     }

//     listarConsultas() {
//         let card = document.createElement("Card")
//         let quadro = document.getElementById("fundo-cards")
//         quadro.appendChild(card)
//         // document.body.appendChild(card)
//     }


//     render() {
//         console.log(this.state.listaconsultas)

//         return (
//             <div className="fundo-consultas">
//                 <Navbar />
//                 <div id="fundo-cards" className="fundo-cards">
//                     {this.state.listaconsultas.map(chave => { return <Card especialidade="Especialidade" medico={chave.nomeMedico} data={chave.dataConsulta} hora={chave.horaConsulta} status={chave.status} /> })}
//                     {/* <Card especialidade="Neurologia" medico="Helena" data="10/10/2019" hora="19:00" status="Realizada" /> */}
//                 </div>
//             </div>
//         )
//     }
// }

// export default Consultas