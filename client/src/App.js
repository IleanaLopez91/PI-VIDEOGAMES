import { Route, Routes, useLocation } from 'react-router-dom';
import axios from "axios"
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";

import { useEffect, useState } from 'react';


function App() {

  const location = useLocation();
  const [name, setName] = useState("")

  const onSearch = async(name) => {
    try {
      const { data } = await axios(`http://localhost:3001/videogames?name=${name}`)
      if(data){
        setName(data)
      }
    } catch (error) {
      window.alert("No hay juegos con ese nombre!")
    }
  }

  

  return (
    <div className="App">

      {location.pathname !== "/" && <NavBar />}
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
