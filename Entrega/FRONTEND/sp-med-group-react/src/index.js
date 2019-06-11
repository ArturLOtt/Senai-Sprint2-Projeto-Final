import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './pages/Login/Login';
import AdminPage from './pages/Admin/AdminPage';
import DoctorPage from './pages/Doctor/DoctorPage';
import PatientPage from './pages/Patient/PatientPage';
import LocalizacaoPage from './pages/Localizacao/Localizacao';
import NotFound from "./pages/NotFound/NotFound";
import * as serviceWorker from './serviceWorker';

import {usuarioAutenticado} from "./services/auth";


const Permissao = ( {component : Component} ) => (
  <Route
    render = {props => usuarioAutenticado() ? 
      (<Component {...props} /> ) :
      (<Redirect to={{ pathname : "/pagina" }} />)
    }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route  path="/login" component={Login} />
        {/* <Permissao path="/admin" component={AdminPage} /> */}
        <Route path="/admin" component={AdminPage} />
        <Permissao path="/medico" component={DoctorPage} />
        <Permissao path="/do-paciente" component={PatientPage} />
        <Permissao path="/localizacao" component={LocalizacaoPage} />
        <Route component={NotFound}/>    
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
