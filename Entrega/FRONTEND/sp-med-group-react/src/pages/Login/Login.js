import React, { Component } from 'react';
import BottonLine from '../../components/Botton/BottomLine';
import TopLine from '../../components/Top/TopLine';
import Axios from "axios";
import { usuarioAutenticado } from '../../services/auth';

class Login extends Component {
  constructor(){
    super();
    this.state = {
        email : '',
        senha : ''
    }
}

atualizarStateEmail(event){  this.setState({ email : event.target.value}); }
atualizarStateSenha(event){  this.setState({ senha : event.target.value}); }

efetuarLogin(event){
  event.preventDefault();
  
  Axios.post("http://localhost:5000/api/login", {
     email: this.state.email,
     senha: this.state.senha
  })
  .then(data => {
      if(data.status === 200){
          // console.log(data);
          localStorage.setItem("usuario", data.data.token);
          // localStorage.setItem("tipoUsuario", data.data.token);
          // tipoUsuario = usuarioAutenticado.




          // this.props.history.push("/");
          this.props.history.push("/admin");


      } 
  })
  .catch(erro => { this.setState({ erroMensagem : 'Email ou senha inválido'});  })
}

    render() {

        return (
<div>
<TopLine></TopLine>
<div>

    <i className="far fa-user fa-7x"></i>
    <form className="form-signin" onSubmit={this.efetuarLogin.bind(this)}>
              <div className="form-label-group">
              <label htmlFor="inputEmail"></label>
                <input 
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.atualizarStateEmail.bind(this)}
                  required autoFocus/>

              </div>

              <div className="form-label-group">
                <label htmlFor="inputPassword"></label>
                <input 
                type="password" 
                id="inputPassword" 
                className="form-control" 
                placeholder="Password"
                value={this.state.pass}
                onChange={this.atualizarStateSenha.bind(this)} 
                required />
              </div>

              <p style={{ color: 'blue'}}>Esqueceu a Senha?</p>

              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>

              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Available_on_the_App_Store_(black)_SVG.svg"></img>

              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Google_Play_logo.svg" height="40px" width="135px"></img>


    </form>


    <div>
            <button type="button" style={{backgroundColor: 'orange'}} disabled> 11 8877-6655 </button>
            <p> Alameda Barão de Limeira, 539 - Santa Cecília, São Paulo - SP, 01202-001 </p>
          </div>


</div>
<BottonLine></BottonLine>
</div>
        );
    }
}

export default Login;