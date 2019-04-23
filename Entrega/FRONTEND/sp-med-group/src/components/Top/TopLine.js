import React from "react";
import { Link } from 'react-router-dom';
import iMedctellus from "../../assets/img/iMedctellus.png";

function TopLine() {
  return (
    <div>
      <div style={{ backgroundColor: "royalblue" }}>
        <div>
          <p><i className="far fa-clock"></i></p>
          <p>SEG-SEX: 8:00 - 20:00 SAB: 9:00 - 18:00 DOM: 9:00 - 17:00</p>
          <p><i className="fas fa-phone-volume"></i></p>
          <p> 11 8877 - 6655 </p>
          <Link to="/login"><button style={{ backgroundColor: "orange"}}>Entrar</button></Link>
          <img /> PT-BR
          <img /> EN
          <img /> SPANISH
          <img src="../../assets/img/iMedctellus.png" height="42" width="42" /> Italy docs
          <img /> S2
          <p>SPMED Group</p>
        </div>
      </div>
    </div>
  );
}


export default TopLine;