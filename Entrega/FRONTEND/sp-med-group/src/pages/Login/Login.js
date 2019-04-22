import React, { Component } from 'react';
import BottonLine from '../../components/Botton/BottomLine';
import TopLine from '../../components/Top/TopLine';

class Login extends Component {

    render() {

        return (
<div>
<TopLine></TopLine>
<div>
    <p>login</p>



    <i class="far fa-user"></i>
    <form class="form-signin">
              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>

              <p style={{ color: 'blue'}}>Esqueceu a Senha?</p>

              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>

              <p>appstore</p>
              <p>googlestore</p>


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