import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { useEffect } from 'react';

import { getAllGames, getGenres } from './redux/actionsCreators';

import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";

function App() {

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getGenres())
  }, [dispatch]);
  
  return (
    <div className="App">

      {location.pathname !== "/" && <NavBar/>}

      <Routes>

        <Route path="/" element={<LandingPage />} /> 

        <Route path="/about" element={<About />}/>

        <Route path="/home" element={<Home />}/> 
     
        <Route path="/form" element={<Form />}/>

        <Route path="/detail/:id" element={< Detail />}/>

      </Routes>

    </div>
  );
}

export default App;