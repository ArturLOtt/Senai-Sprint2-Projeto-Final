import React from 'react';
import logo from '../../logo.svg';

function BottomLine() {
    return(
                <div >
                  <div className="d-flex p-2" style={{backgroundColor: 'darkblue'}}>
                    <style dangerouslySetInnerHTML={{__html: ".supreme{color: white;}" }} />
                      <div>
                      <img src={logo} height="120px;" width="120px;" />
                      </div>
                      <div>
                      <p className="supreme">Sobre nós</p>
                      <p className="supreme">SPMEDGROUP</p>
                      <p className="supreme">MAPA DO SITE</p>
                      </div>
                      <div>
                      <p className="supreme">SPMed &amp; você</p>
                      <p className="supreme">Faça seu cadastro</p>
                      <p className="supreme">Acesse sua conta</p>
                      <p className="supreme">SPMEDGroup App</p>
                      <a href="#"><i className="fab fa-facebook-square"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <p className="supreme">11 8877-6655</p>
                      </div>
                      <div>
                      <p className="supreme">Entre em contato</p>
                      <p className="supreme">Hospital SPMED</p>
                      <p className="supreme">Alameda Barão de Limeira, 539 - Santa Cecília, São Paulo - SP, 01202-001</p>
                      </div>
                      <div>
                      <p className="supreme">Recrutamento: Trabalhe Conosco</p>
                      </div>
                      <div>
                      <p className="supreme">WEB DESIGN: Equipe A.LOTT</p>
                      </div>
                  </div>
                </div>
    );
}

export default BottomLine;