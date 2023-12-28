import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from "./Cards.module.css"

const Cards = ({games}) => {

  return (
    <div className={style.wrapperCards}>
      {games.map((game) => {
        return (
          <Card 
            key={game.id}
            id={game.id}
            name={game.name}
            background_image={game.background_image}
            genres={game.genres}
          /> 
        )
      }
      )}
    </div>
  )
}

export default Cards
