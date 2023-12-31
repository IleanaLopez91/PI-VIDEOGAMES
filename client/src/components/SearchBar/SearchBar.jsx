import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { getAllGames, getVideoGamesByName } from '../../redux/actionsCreators';

import style from "./SearchBar.module.css";

const SearchBar = () => {

  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");

  const handleSearchChange = (e) => {
      setSearchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchName === "") {
      dispatch(getAllGames());
    } else {
      dispatch(getVideoGamesByName(searchName));
    }
  };

  return (
    <div className={style.container}>
      <input 
        placeholder='Escribe un nombre...'
        type="search"
        value={searchName}
        onChange={handleSearchChange}
        className={style.searchBar}
      />

      <button
        className={style.searchButton}
        onClick={handleSubmit}
      >
        SEARCH
      </button>
      <button
        className={style.logoutButton}
      >
        LOGOUT
      </button>
    </div>
  )
}

export default SearchBar
