import React, { useRef } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { 
  filterGamesByGenre, 
  filterGamesByOrigin, 
  orderGamesAlphabetically, 
  orderGamesByRating 
} from '../../redux/actionsCreators';

import style from "./Filtros.module.css"

const Filtros = ({ handlePageChange }) => {

  const dispatch = useDispatch();

  const genres = useSelector(state=>state.genres);

  const selectRefs = useRef([]);
  
  /*const handleResetFilters = () => {
    dispatch(resetFilters());
    handlePageChange(1);
    selectRefs.current.forEach((select) => (select.value = "DEFAULT"));
  };*/

  const handleOriginChange = (e) => {
    handlePageChange(1);
    dispatch(filterGamesByOrigin(e.target.value));
  };

  const handleGenreChange = (e) => {
    handlePageChange(1);
    dispatch(filterGamesByGenre(e.target.value));
  };

  const handleAlphabeticChange = (e) => {
    handlePageChange(1)
    dispatch(orderGamesAlphabetically(e.target.value));
  };

  const handleRatingChange = (e) => {
    handlePageChange(1)
    dispatch(orderGamesByRating(e.target.value));
  };

  return (
    <div className={style.filterContainer}>
      <div className={style.filter}>
      <label>ORIGEN</label>
        <select
          ref={(el) => (selectRefs.current[0] = el)}
          name="origin"
          defaultValue={"DEFAULT"}
          onChange={handleOriginChange}
          className={style.pages}
        >
          <option value="DEFAULT" disabled hidden>
            --
          </option>
          <option value="A">API</option>
          <option value="C">CREATED</option>
        </select>
        </div>
        <div className={style.filter}>
        <label>GENRE</label>
        <select
          ref={(el) => (selectRefs.current[1] = el)}
          name="genders"
          defaultValue={"DEFAULT"}
          onChange={handleGenreChange}
          className={style.pages}
        >
          <option value="DEFAULT" disabled hidden>
            --
          </option>
          {genres.map((genre, index) => (
            <option key={index} value={genre.name}>
              {genre.name.toUpperCase()}
            </option>
          ))}
        </select>
        </div>
        <div className={style.filter}> 
        <label>NOMBRE</label>
        <select
          ref={(el) => (selectRefs.current[2] = el)}
          className={style.pages}
          name="orderByName"
          defaultValue={"DEFAULT"}
          onChange={handleAlphabeticChange}
        >
          <option value="DEFAULT" disabled hidden>
            --
          </option>
          <option value="A">ASCENDING</option>
          <option value="D">DESCENDING</option>
        </select>
        </div>
        <div className={style.filter}> 
        <label>RATING</label>
        <select
          ref={(el) => (selectRefs.current[3] = el)}
          name="rating"
          defaultValue={"DEFAULT"}
          onChange={handleRatingChange}
          className={style.pages}
        >
          <option value="DEFAULT" disabled hidden>
            --
          </option>
          <option value="H">HIGH RATING</option>
          <option value="L">LOW RATING</option>
        </select>
        </div>
    </div>
  )
}

export default Filtros
