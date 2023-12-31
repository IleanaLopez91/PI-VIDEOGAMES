import {Link} from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import style from "./NavBar.module.css"

const NavBar = () => {

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
            CREATE
          </button>
        </Link>
        <Link to="/about">
          <button className={style.btn}>
            ABOUT
          </button>
        </Link>
      </div>

      <div className={style.searchBar}>
        <SearchBar />
      </div>
      
    </div>
  )
}

export default NavBar
