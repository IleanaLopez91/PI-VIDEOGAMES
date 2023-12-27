import React from 'react';
import {Link} from "react-router-dom";
import style from "./LandingPage.module.css"

const LandingPage = () => {
  const welcomeText = "BIENVENIDO";

  return (
    <div className={style.landing}>
      <h1>
        {welcomeText.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
      <Link to="/home">ENTER</Link>
    </div>
  );
};


export default LandingPage
