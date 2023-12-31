import { 
  GET_ALLGAMES, 
  GET_GENRES,
  GET_VIDEOGAMES_BY_NAME, 
  POST_GAME, 
  ORDER_VIDEOGAMES_BY_RATING, 
  ORDER_VIDEOGAMES_ALPHATICALLY,
  FILTER_VIDEOGAMES_BY_GENRE, 
  FILTER_VIDEOGAMES_BY_ORIGIN
} from "./actionsTypes";

import axios from "axios";


export const getAllGames = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:3001/videogames");
        const allGames = response.data;
        //console.log(allGames)
        dispatch({
            type: GET_ALLGAMES,
            payload: allGames
        })
    }
}


export const getGenres = () => {
    return async (dispatch) => {
        try {
           const response = await axios.get("http://localhost:3001/genres");
           const genres = response.data;
           //console.log(genres);
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
    const { data } = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    return dispatch({
      type: GET_VIDEOGAMES_BY_NAME,
      payload: data,
    });
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
            return dispatch({
                type: POST_GAME,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}