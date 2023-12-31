import React from 'react';
import {Link} from "react-router-dom";

import style from "./Card.module.css";

function Card ({id, name, background_image, genres}) {
  
  return (
    <div className={style.cardContainer}>

      <div className={style.header}>
        <img src={background_image} className={style.imagen} alt=""/>
      </div>

      <div className={style.wrapperText}>
        <div className={style.name}>
          <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
          </Link>
        </div>
      </div>

      <div className={style.anotherText}>
        <h3>Genres: {genres}</h3>
      </div>

    </div>
  )
}

export default Card
