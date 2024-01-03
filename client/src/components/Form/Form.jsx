import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { postGame } from "../../redux/actionsCreators";
import { validation } from './validation';

import style from "./Form.module.css"

const Form = () => {

  const platforms = [ "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox", "Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux"]

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const genres = useSelector(state=>state.genres)

  const [gameForm, setGameForm] = useState({
    name:"",
    description: "",
    platforms: [],
    background_image: "",
    released: "",
    rating: "",
    genres: []
  })

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    let propiedad = [event.target.name];
    let valor = event.target.value;
    setGameForm({...gameForm, [propiedad]: valor});
    setErrors(validation({...gameForm, [propiedad]: valor}))
  }

  const platformChangeHandler = (event) => {
    const { value, checked } = event.target;
    setGameForm((prevGameForm) => {
      const updatedGameForm = {
        ...prevGameForm,
        platforms: checked
          ? [...prevGameForm.platforms, value]
          : prevGameForm.platforms.filter((platform) => platform !== value),
      };
      setErrors(validation(updatedGameForm));
      return updatedGameForm;
    });
  };
  
  const genreChangeHandler = (event) => {
    const { value, checked } = event.target;
    setGameForm((prevGameForm) => {
      const updatedGameForm = {
        ...prevGameForm,
        genres: checked
          ? [...prevGameForm.genres, value]
          : prevGameForm.genres.filter((genre) => genre !== value),
      };
      setErrors(validation(updatedGameForm));
      return updatedGameForm;
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postGame(gameForm));
    window.alert("Juego creado exitosamente")
    navigate("/home")
  }

  return (
    <div className={style.formContainer}>
      <div className={style.completeForm}>
        <p>COMPLETE THE FORM TO CREATE A GAME</p>
      </div>

      <div> 
        <form onSubmit={handleSubmit}>
          
          <div className={style.columns}>
            <div>
              <div className={style.separator}>  
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
                  {errors.name && <p className={style.errorText}>{errors.name}</p>}
                </div>
              </div>

              <div className={style.separator}>  
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
                  {errors.background_image && (<p className={style.errorText}>{errors.background_image}</p>)}
                </div>
              </div>

              <div className={style.separator}>  
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
                  {errors.description && <p className={style.errorText}>{errors.description}</p>}
                </div>
              </div>

              <div className={style.separator}>  
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
                        name="platforms"
                    value={plat}
                    checked={gameForm.platforms.includes(name)}
                    onChange={platformChangeHandler}
                    className={style.chechBox}
                  />
                  </p>
                );
              })}
              {errors.platforms && <p className={style.errorText}>{errors.platforms}</p>}
            </div>
          </div>
        </div>

        <div> 
          <div className={style.separator}>   
            <div>
              <label>RELEASE DATE</label>
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
              {errors.released && <p className={style.errorText}>{errors.released}</p>}
            </div>
          </div>
          <div className={style.separator}>  
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
              {errors.rating && <p className={style.errorText}>{errors.rating}</p>}
            </div>
          </div>
          <div className={style.separator}>
            <div>
              <label>GENRES</label>
            </div>
            <div>
              {genres.map((g) => {
                return (
                  <p key={g.name}>
                    {g.name}
                    <input
                      type="checkbox"
                      name="genres"
                      value={g.name}
                      checked={gameForm.genres.includes(g.name)}
                      onChange={genreChangeHandler}
                      className={style.chechBox}
                    />
                  </p>
                );
              })}
              {errors.genres && <p className={style.errorText}>{errors.genres}</p>}
            </div>
          </div>
        </div>
        </div>

        <div className={style.containerButton}>
          <button 
            type='submit'
            className={style.createButton}
          >CREATE GAME</button>
        </div>

        </form>
      </div>
    </div>
  )
}

export default Form
