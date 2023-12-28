import { GET_ALLGAMES, FILTER, ORDER,  GET_GENRES, POST_GAME } from "./actionsTypes"
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

export const filterGames = (name) => {
    return {
        type: FILTER,
        payload: name
    }
}

export const orderGames = (orden) => {
    return{
        type: ORDER,
        payload: orden
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