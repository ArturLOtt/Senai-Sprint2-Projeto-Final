import React, { Component } from 'react';
import BottonLine from './components/Botton/BottomLine';
import TopLine from './components/Top/TopLine';
import './App.css';
import saoPauloMap from './assets/img/saoPauloMap.jpg';

class App extends Component {
  render() {

    return (
      <div className="App">

<TopLine></TopLine>
        <div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Faça uma pesquisa" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="submit" id="button-addon2" style={{ color: 'black'}}><i className="fas fa-search"></i></button>
            </div>
          </div>
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-secondary white-border" data-toggle="collapse" data-target="#collapseABoutUs" aria-expanded="false" aria-controls="collapseABoutUs">
                Sobre Nós
              </button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Second group">
              <button type="button" className="btn btn-secondary white-border" data-toggle="collapse" data-target="#collapsePacient" aria-expanded="false" aria-controls="collapsePacient">
                Paciente
              </button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary white-border" data-toggle="collapse" data-target="#collapseExams" aria-expanded="false" aria-controls="collapseExams">
                Exames
              </button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Fourth group">
              <button type="button" className="btn btn-secondary white-border" data-toggle="collapse" data-target="#collapseLocation" aria-expanded="false" aria-controls="collapseLocation">
                Unidades
              </button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Fifth group">
              <button type="button" className="btn btn-secondary white-border" data-toggle="collapse" data-target="#collapsePartners" aria-expanded="false" aria-controls="collapsePartners">
                Convenios
              </button>
            </div>
            <div className="collapse" id="collapseABoutUs">
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
            <div className="collapse" id="collapsePacient">
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
            <div className="collapse" id="collapseExams">
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
            <div className="collapse" id="collapseLocation">
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
            <div className="collapse" id="collapsePartners">
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </div>
          <div className="card">
            <div className=" darkblue sidenav">
              <h2>Departamentos</h2>
              <p>ACUPUNTURA</p>
              <p>ANESTESIOLOGIA</p>
              <p>ANGIOLOGIA</p>
              <p>CARDIOLOGIA</p>
              <p>CIRURGIA CARDIOVASCULAR</p>
              <p>CIRURGIA DE MAO</p>
              <p>CIRURGIA DO APARELHO DIGESTIVO</p>
              <p>CIRURGIA GERAL</p>
              <p>CIRURGIA PEDIATRICA</p>
              <p>CIRURGIA PLASTICA</p>
              <p>CIRURGIA TORACICA</p>
              <p>CIRURGIA VASCULAR</p>
              <p>DERMATOLOGIA</p>
              <p>RADIOTERAPIA</p>
              <p>UROLOGIA</p>
              <p>PEDIATRIA</p>
              <p>PSIQUIATRIA</p>
            </div>
          </div>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              <li data-target="#carouselExampleIndicators" data-slide-to={3} />
              <li data-target="#carouselExampleIndicators" data-slide-to={4} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h2>Noticia 1</h2>
              </div>
              <div className="carousel-item">
                <h2>Noticia 2</h2>
              </div>
              <div className="carousel-item">
                <h2>Noticia 3</h2>
              </div>
              <div className="carousel-item">
                <h2>Noticia 4</h2>
              </div>
              <div className="carousel-item">
                <h2>Noticia 5</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h2>Nossas Instalações:</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
                voluptates doloribus eius autem, qui ut velit aliquid quos atque
                odit provident nihil molestias? Possimus unde quaerat natus
                similique, dolore cupiditate.
              </p>
              <div className="btn-group">
                <button type="button" className="btn btn-secondary mr-2" style={{backgroundColor: 'mediumseagreen'}}>
                  Parceiro 1
                </button>
                <button type="button" className="btn btn-secondary mr-2" style={{backgroundColor: 'mediumseagreen'}}>
                  Parceiro 2
                </button>
              </div>
            </div>
          </div>
          <div>
            <button type="button" style={{backgroundColor: 'orange'}} disabled> 11 8877-6655 </button>
            <p> Alameda Barão de Limeira, 539 - Santa Cecília, São Paulo - SP, 01202-001 </p>
          </div>
        <div>
          <img src={saoPauloMap} height="300px" width="100%"></img>
        </div>
        </div>
<BottonLine></BottonLine>
      </div>
    );
  }
}

export default App;
