import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import style from "./Detail.module.css"
import axios from "axios";

const Detail = () => {
  const {id} = useParams();

  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios(`http://localhost:3001/videogames/${id}`)
      .then(({data}) => {
        if(data.name){
          setCharacter(data)
        }else{
          window.alert("No personaje!")
        }
      });
  },[id])

  return (
    <div>
      <div className={style.contenedordelnombre}>
        <div className={style.nombre}>
          {character.name}
        </div>
      </div>
      
      <div className={style.fondo}>
        <div className={style.columna}>
          <div className={style.verde}>
            <img src={character.image} className={style.imagen}alt=''></img>
          </div>  
          <div className={style.resto}>
            <div className={style.description}>
              <p>Released: {character.released}</p>
              <p>Rating: {character.rating}</p>
              
            </div>
            <div className={style.description}>Platform: <ul>{character.platform?.map((plat) => <li>{plat}</li>)}</ul></div>
          </div>
          
        </div>
        <div className={style.rojo}>
          <p className={style.parraf}>Description: </p> 
          <p className={style.parrafo}>{character.description}</p>
        </div>
      </div>  
    </div>
    
  );
}

export default Detail
