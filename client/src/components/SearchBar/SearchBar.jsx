import React from 'react';
import { useState } from 'react';
import style from "./SearchBar.module.css";

const SearchBar = ({onSearch}) => {

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className={style.container}>
      <input 
        placeholder='Escribe un nombre...'
        type='search'
        value={name}
        onChange={handleChange}
        className={style.searchBar}
      />

      <button
        className={style.searchButton}
        onClick={()=>{onSearch(name); setName("")}}
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
