import React from "react";
import logo from "../../logo.svg";
import "./BottonLine.css";

function BottomLine() {
  return (
    <div>
      <div className="darkblueBotton wrapper">
        <div className="grid-item a">
          <img src={logo} height="120px;" width="120px;" />
        </div>
        <div className="grid-item b">
          <p className="supreme">Sobre nós</p>
          <p className="supreme">SPMEDGROUP</p>
          <p className="supreme">MAPA DO SITE</p>
        </div>
        <div className="grid-item c">
          <p className="supreme">SPMed &amp; você</p>
          <p className="supreme">Faça seu cadastro</p>
          <p className="supreme">Acesse sua conta</p>
          <p className="supreme">SPMEDGroup App</p>
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram" />
          </a>
          <p className="supreme">11 8877-6655</p>
        </div>
        <div className="grid-item d">
          <p className="supreme">Entre em contato</p>
          <p className="supreme">Hospital SPMED</p>
          <p className="supreme">
            Alameda Barão de Limeira, 539 - Santa Cecília, São Paulo - SP,
            01202-001
          </p>
        </div>
        <div className="grid-item e">
          <p className="supreme">Recrutamento: Trabalhe Conosco</p>
        </div>
        <div className="grid-item f">
          <p className="supreme">WEB DESIGN: Equipe A.LOTT</p>
        </div>
      </div>
    </div>
  );
}

export default BottomLine;
