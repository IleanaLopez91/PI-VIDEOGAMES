import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import style from "./Detail.module.css"


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

  const removeHtmlTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };
 
  return (
    <div>
      <div className={style.conteinerName}>
        <div className={style.name}>
          {character.name}
        </div>
      </div>
      
      <div className={style.containerDetail}>
        <div className={style.columna1}>
          <div className={style.containerImage}>
            <img src={character.image} className={style.image}alt=''></img>
          </div>  
          <div className={style.containerTextDescription}>
            <div className={style.textDescription}>
              <p>Released: {character.released}</p>
              <p>Rating: {character.rating}</p>
              <p>Genres: {character.genres?.join(', ')}</p>
            </div>
            <div className={style.textDescription}>
              Platform: <ul>{character.platform?.map((plat) => <li>{plat}</li>)}</ul>
            </div>
          </div>
        </div>
        <div className={style.columna2}>
          <p className={style.descriptionTitle}>Description: </p> 
          <p className={style.descriptionText}>{removeHtmlTags(character.description)}</p>
        </div>
      </div>  
    </div>
  );
}

export default Detail
