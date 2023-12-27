import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import Cards from "../Cards/Cards";
import Form from '../Form/Form';
import {getAllGames} from "../../redux/actionsCreators";
import style from "./Home.module.css";

const Home = () => {

  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);
  const gamesPerPage = 5; // Número de juegos por página
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");

  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;

  const filteredGames = searchName
    ? allGames.filter((game) =>
    game.name.toLowerCase().includes(searchName.toLowerCase()))
    : allGames;

  const displayedGames = filteredGames.slice(startIndex, endIndex);
  
  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);
  
  const totalPages = Math.ceil(allGames.length / gamesPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className={style.container}> 
        <h1>ALL VIDEOGAMES</h1>
      </div>
      <div>
        <Cards games={displayedGames} />
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
