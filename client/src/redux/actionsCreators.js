import { 
  GET_ALLGAMES, 
  GET_GENRES,
  GET_VIDEOGAMES_BY_NAME, 
  NO_RESULTS_FOUND,
  FILTER_VIDEOGAMES_BY_ORIGIN,
  FILTER_VIDEOGAMES_BY_GENRE, 
  ORDER_VIDEOGAMES_ALPHATICALLY,
  ORDER_VIDEOGAMES_BY_RATING, 
  POST_GAME, 
} from "./actionsTypes";

import axios from "axios";

export const getAllGames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/videogames");
      const allGames = response.data;
      dispatch({
        type: GET_ALLGAMES,
        payload: allGames
      })
    } catch (error) {
      window.alert("Error al cargar los datos")
    }
  }
}

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/genres");
      const genres = response.data;
        dispatch({
          type: GET_GENRES,
          payload: genres
          })
    } catch (error) {
      window.alert(error)
    }
  }
}

export function getVideoGamesByName(name) {
  return async function (dispatch) {
    try {
        const { data } = await axios.get(
          `http://localhost:3001/videogames?name=${name}`
        );
        const filteredData = data.filter(dat => dat !== null);

        if(filteredData.length === 0){
          window.alert("There are no games with that name")
          dispatch({
            type: NO_RESULTS_FOUND,
          })
        }else{
          return dispatch({
            type: GET_VIDEOGAMES_BY_NAME,
            payload: data,
          })
        }
    } catch (error) {
      window.alert("Esta mul mal")
    }
  };
}

export function filterGamesByOrigin(value) {
  return function (dispatch) {
    return dispatch({
      type: FILTER_VIDEOGAMES_BY_ORIGIN,
      payload: value,
    });
  };
}

export function filterGamesByGenre(value) {
  return function (dispatch) {
    return dispatch({
      type: FILTER_VIDEOGAMES_BY_GENRE,
      payload: value,
    });
  };
}

export function orderGamesAlphabetically(value) {
  return function (dispatch) {
    return dispatch({
      type: ORDER_VIDEOGAMES_ALPHATICALLY,
      payload: value,
    });
  };
}
  
export function orderGamesByRating(option) {
  return function (dispatch) {
    return dispatch({
      type: ORDER_VIDEOGAMES_BY_RATING,
      payload: option,
    });
  };
}

export const postGame = (form) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:3001/videogames", form);
      const videoGameWithFormattedGenres = {
        ...data,
        genres: data.genres.map((genre) => genre.name),
      };
      return dispatch({
        type: POST_GAME,
        payload: videoGameWithFormattedGenres
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}