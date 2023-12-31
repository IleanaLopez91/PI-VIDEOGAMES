import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { validation } from './validation';
import { postGame, getGenres } from "../../redux/actionsCreators";

import style from "./Form.module.css"

const Form = () => {

  const platforms = [ "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox", "Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux"]

  const dispatch = useDispatch();

  const genres = useSelector(state=>state.genres)
  //console.log(genres)

  const [gameForm, setGameForm] = useState({
    name:"",
    description: "",
    platform: [],
    background_image: "",
    released: "",
    rating: "",
    genres: []
  })

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    let propiedad = [event.target.name];
    let valor = event.target.value;
    //if(propiedad === "platform" || propiedad === "genres"){
    //  valor = valor.split(", ").filter(Boolean)
    //}
    setGameForm({...gameForm, [propiedad]: valor});
    setErrors(validation({...gameForm, [propiedad]: valor}))
  }

  /*const isValid = () => {
    return Object.values(errors).every((error) => !error) &&
    Object.values(gameForm).every((value) => value.trim() !== "");
  } */

  const platformChangeHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setGameForm((prevData) => ({
        ...prevData,
        platform: [...prevData.platform, value],
      }));
    } else {
      setGameForm((prevData) => ({
        ...prevData,
        platform: prevData.platform.filter((platform) => platform !== value),
      }));
    }
  };

  const genreChangeHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setGameForm((prevData) => ({
        ...prevData,
        genres: [...prevData.genres, value],
      }));
    } else {
      setGameForm((prevData) => ({
        ...prevData,
        genres: prevData.genres.filter((genre) => genre !== value),
      }));
    };
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(postGame(gameForm));
    /*if(isValid()){
      try {
        dispatch(postGame(gameForm));
        window.alert("Exitoso");
        setGameForm({
          name:"",
          background_image: "",
          description: "",
          platform: [],
          released: "",
          rating: "",
          genres: []
        })
      } catch (error) {
        window.alert("Datos incorrectos")
      }
    }*/
  }

  return (
    <div className={style.formContainer}>
      <div className={style.completeForm}><p>COMPLETA EL FORMULARIO</p></div>
      <div> 
      <form onSubmit={handleSubmit} className={style.columnas}>
        <div> 
        <div className={style.separador}>  
        <div>
          <label>NAME</label>
        </div>
        <div>
          <input 
            name='name'
            placeholder='Coloca un nombre...'
            type='text'
            value={gameForm.name}
            onChange={handleChange}
            className={style.inputBtn}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        </div>

    <div className={style.separador}>  
        <div>
          <label>IMAGE</label>
        </div>
        <div>
          <input 
            name='background_image'
            placeholder='Coloca imagen...'
            type='text'
            value={gameForm.background_image}
            onChange={handleChange}
            className={style.inputBtn}
          />
          {errors.background_image && (<p>{errors.background_image}</p>)}
        </div>
        </div>


<div className={style.separador}>  
        <div>
          <label>DESCRIPTION</label>
        </div>
        <div>
          <textarea 
            name='description'
            placeholder='Coloca una descripcion'
            maxLength={300}
            value={gameForm.description}
            onChange={handleChange}
            className={style.inputBtn}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        </div>


<div className={style.separador}>  
        <div>
          <label>PLATFORMS</label>
        </div>
        <div>
        {platforms.map((plat) => {
          const name = String(plat);
          return (
            <p key={plat}>
            {plat}
            <input
              type="checkbox"
              name="platform"
              value={plat}
              checked={gameForm.platform.includes(name)}
              onChange={platformChangeHandler}
              className={style.chechBox}
            />
            </p>
          );
        })}
  {errors.platform && <p>{errors.platform}</p>}
        </div>
        </div>

        
        </div>


        <div> 


          <div className={style.separador}>   
        <div>
          <label>FECHA DE LANZAMIENTO</label>
        </div>
        <div>
          <input 
            name='released'
            placeholder='Coloca fecha de lanzamiento'
            type='text'
            value={gameForm.released}
            onChange={handleChange}
            className={style.inputBtn}
          />
        </div>
        </div>

<div className={style.separador}>  
        <div>
          <label>RATING</label>
        </div>
        <div>
          <input 
            name='rating'
            placeholder='Coloca rating...'
            type='text'
            value={gameForm.rating}
            onChange={handleChange}
            className={style.inputBtn}
          />
        </div>
        </div>


        <div className={style.separador}>
        <div>
          <label>GENRES</label>
        </div>
        <div>
          {genres.map((g) => {
          //const name = String(g);
          return (
            <p key={g.name}>
              {g.name}
              <input
                type="checkbox"
                name="genres"
                value={g.name}
                checked={gameForm.genres.includes(g.name)}
                onChange={genreChangeHandler}
              />
            </p>
            );
          })}
          {errors.genres && <p>{errors.genres}</p>}
        </div>
        </div>
        
        </div>
        
      </form>
      </div>
      <button 
          type='submit'
          className={style.pages}
        >CREATE GAME</button>
    </div>
  )
}

export default Form
