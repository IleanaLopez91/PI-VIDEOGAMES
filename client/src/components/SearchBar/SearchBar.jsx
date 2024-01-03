import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

import { getAllGames, getVideoGamesByName } from '../../redux/actionsCreators';

import style from "./SearchBar.module.css";

const SearchBar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
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

  const handleLogOut = () => {
    navigate("/")
  }

  return (
    <div>
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
        onClick={handleLogOut}
      >
        LOGOUT
      </button>
    </div>
  )
}

export default SearchBar
