import React from 'react';
import style from "./About.module.css";
import image from "../../assets/imagen.jpeg"

const About = () => {
  return (
    <div className={style.wrapperContainer}>
      <div className={style.container}>
        <h1>ABOUT THIS PROYECT</h1>
        <img src={image} alt="" className={style.imagen}></img>
        <h2>Hola amigos, mi nombre es Ileana. Soy médica y, en el último tiempo, he desarrollado un interés por la programación. 
        A pesar de no tener conocimientos previos, he iniciado esta maravillosa experiencia en Henry. Con la ayuda de mis profesores y compañeros, 
        he logrado crear esta pequeña página que espero les guste.
        <br></br><br></br><br></br>
        Hello friends, my name is Ileana. I am a medical doctor, and recently, I have developed an interest in programming. Despite not having 
        any previous knowledge, I have started this wonderful journey at Henry. With the help of my teachers and fellow students, I have managed 
        to create this small website that I hope you will like.
        </h2>
      </div>
    </div>
  )
}

export default About

