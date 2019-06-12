import React from "react";
import { Link } from 'react-router-dom';
import iMedctellus from '../../assets/img/iMedctellus.png';
import logo from '../../logo.svg';
import br206597 from '../../assets/svg/br206597.svg';
import sp206724 from '../../assets/svg/sp206724.svg';
import us206626 from '../../assets/svg/us206626.svg';
import './TopLine.css';

function TopLine() {
  return (
    <div>
      <nav className="d-flex p-2 nav darkblueTop" >


          <p><i className="far fa-clock"></i></p>
          <p>SEG-SEX: 8:00 - 20:00 SAB: 9:00 - 18:00 DOM: 9:00 - 17:00</p>
          <p><i className="fas fa-phone-volume"></i></p>
          <p> 11 8877 - 6655 </p>

          <div className="nav justify-content-end">
          <Link to="/login"><button className="salmon nav-item">Entrar</button></Link>
          <img src={br206597} height="50px" width="50px" className="nav-item" />
          <img src={us206626} height="50px" width="50px" className="nav-item" /> 
          <img src={sp206724} height="50px" width="50px" className="nav-item" /> 
          </div>




      </nav>
      <div>
          <img src={logo} />
          <p>SPMED Group</p>
          <img src={iMedctellus} height="400px" width="100%" />
          <div style={{ backgroundColor: "white", opacity: "0.5", height: "400px", width: "100%" }} ></div>
          </div>
    </div>
  );
}


export default TopLine;