import React, { useState } from 'react';
import { useSelector} from "react-redux";

import Cards from "../Cards/Cards";
import Filtros from '../Filtros/Filtros';

import style from "./Home.module.css";

const Home = () => {

  const allGames = useSelector((state) => state.allGames);
  
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allGames.length / 15);
  
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(i);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Filtros 
        handlePageChange={handlePageChange}
      />
      <div className={style.container}> 
        <h1>ALL VIDEOGAMES</h1>
      </div>
      <div>
        <Cards 
          allGames={allGames}
          paginationButtons={paginationButtons}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Home