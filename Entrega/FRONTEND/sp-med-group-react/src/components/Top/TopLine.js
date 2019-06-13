import React from "react";
import { Link } from "react-router-dom";
import iMedctellus from "../../assets/img/iMedctellus.png";
import logo from "../../logo.svg";
import br206597 from "../../assets/svg/br206597.svg";
import sp206724 from "../../assets/svg/sp206724.svg";
import us206626 from "../../assets/svg/us206626.svg";
import "./TopLine.css";

function TopLine() {
  return (
    <div>
      <div className="wrapper">

        <div className="darkblueTop grid-item a">
          <div className="">
            <p>
              <i className="far fa-clock " />
            </p>
            <p className="">
              SEG-SEX: 8:00 - 20:00 SAB: 9:00 - 18:00 DOM: 9:00 - 17:00
            </p>
            <p>
              <i className="fas fa-phone-volume " />
            </p>
            <p className=""> 11 8877 - 6655 </p>
          </div>

          <div className="">
            <Link to="/login">
              <button className="salmon">Entrar</button>
            </Link>
            <img src={br206597} height="50px" width="50px" className="" />
            <img src={us206626} height="50px" width="50px" className="" />
            <img src={sp206724} height="50px" width="50px" className="" />
          </div>
        </div>

        <div className="grid-item b">
          <img src={logo} />
          <p className="green-tittle"> SPMED Group </p>
          <img src={iMedctellus} height="400px" width="100%" />
          <div className="blanka" />
        </div>

      </div>
    </div>
  );
}

export default TopLine;
