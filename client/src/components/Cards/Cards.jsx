import React from 'react';

import Card from '../Card/Card';

import style from "./Cards.module.css"

const Cards = ({ allGames, paginationButtons, currentPage, handlePageChange }) => {

  const gamesPerPage = 15;
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const pagination = allGames.slice(startIndex, endIndex);

  return (
    <div>
      <div className={style.wrapperCards}>
        {pagination.map((game) => {
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
          
      <div className={style.boton}>
        <p className={style.pageText} >PAGES</p>
        {paginationButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
        
    </div>
  )
}

export default Cards
