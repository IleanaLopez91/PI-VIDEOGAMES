
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css"


const NavBar = ({onSearch}) => {

  

  return (
    <div className={style.container}>
      <div>
        <Link to="/home">
          <button className={style.btn}>
            HOME
          </button>
        </Link>

        <Link to="/form">
          <button className={style.btn}>
            CREA TU JUEGO
          </button>
        </Link>
      </div>

      <div className={style.searchBar}>
        <SearchBar 
          onSearch={onSearch}
        />
      </div>
      
    </div>
  )
}

export default NavBar
