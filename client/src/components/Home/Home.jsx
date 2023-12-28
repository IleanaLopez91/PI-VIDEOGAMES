import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import Cards from "../Cards/Cards";
import Form from '../Form/Form';
import {getAllGames, orderGames} from "../../redux/actionsCreators";
import style from "./Home.module.css";

const Home = ({displayedGames, handlePageChange, currentPage, totalPages, endIndex, allGames}) => {

  const genres = useSelector(state=>state.genres)
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(orderGames(e.target.value))
  }

  const orderGames = useSelector((state) => state.orderGameByName)

  const handlerOrder = () => {}

  return (
    <div>
      <div className={style.container}> 
        <h1>ALL VIDEOGAMES</h1>
      </div>
      <div>
      <p>GENERO</p>
        <select onChange={handlerOrder}>
          {genres.map((genre) =>{
            return (
              <option value = {genre.name}>{genre.name.toUpperCase()}</option>
            )
          } )}
        </select>
        <p>ORIGEN</p>
        <select>
          <option value="Api">API</option>
          <option value="Base de Datos">BASE DE DATOS</option>
        </select>
        <p>NOMBRE</p>
        <select onChange={handleFilter}>
          <option value="A">ASCENDENTE</option>
          <option value="D">DESCENDENTE</option>
        </select>
        <p>RATING</p>
        <select>
          <option value="1">1 - 1.9</option>
          <option value="2">2 - 2.9</option>
          <option value="3">3 - 3.9</option>
          <option value="4">4 - 5</option>
        </select>
      </div>
      <div>
        <Cards games={!orderGames.length ? displayedGames : orderGames} />
      </div>
      <div>
        <div className={style.text}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={style.pageButton}
          >
            Previous Page
          </button>
          <span className={style.text}> Page: {currentPage} of {totalPages} </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={endIndex >= allGames.length}
            className={style.pageButton}
          >
            Next Page
          </button>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Home
