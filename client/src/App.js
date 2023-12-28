import { Route, Routes, useLocation } from 'react-router-dom';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import './App.css';
import { getAllGames, orderGames} from './redux/actionsCreators';
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";

import { useEffect, useState } from 'react';

function App() {

  const location = useLocation();
  const [name, setName] = useState("");

  const onSearch = async(name) => {
    try {
      const { data } = await axios(`http://localhost:3001/videogames?name=${name}`)
      if(data){
        console.log(data)
        setName(data)
      }
    } catch (error) {
      window.alert("No hay juegos con ese nombre!")
    }
  }

//Fubciones para rederizar las tarjetas:
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);
  
  const gamesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;

  const displayedGames = name ? name.slice(startIndex, endIndex) : allGames.slice(startIndex, endIndex);
  //console.log(displayedGames)

  const pagesLength = name ? name.length : allGames.length 
  const totalPages = Math.ceil(pagesLength/ gamesPerPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">

      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
      <Routes>

      <Route path="/" element={<LandingPage />} /> 

      <Route path="/about" element={<About />}/>

      <Route path="/home" element={<Home 
        displayedGames={displayedGames}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        endIndex={endIndex}
        allGames={allGames}
        //handleFilter={handleFilter}
      />}/> 
     
      <Route path="/form" element={<Form />}/>

      <Route path="/detail/:id" element={< Detail />}/>

      </Routes>
    </div>
  );
}

export default App;