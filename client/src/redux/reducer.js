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

const inicialState = {
  allGames: [],
  genres: [],
  allGamesCopy: [],
}

const rootReducer = (state = inicialState, {type, payload}) => {
  switch(type){

    case GET_ALLGAMES:
      return{
        ...state,
        allGames: payload,
        allGamesCopy: payload,
        
      }

    case GET_GENRES:
      return{
        ...state, 
        genres: payload
      }

    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        allGames: payload,
      };

    case FILTER_VIDEOGAMES_BY_ORIGIN:

      const VideoGamesByOrigin = state.allGamesCopy.filter(
        (game) => (payload === "A" ? typeof game.id === "number" : typeof game.id === "string")
      );
      return {
        ...state,
        allGames: VideoGamesByOrigin,
      };

    case FILTER_VIDEOGAMES_BY_GENRE:
      const gamesByGenre = state.allGamesCopy.filter((game) => game.genres.includes(payload))
      return {
        ...state,
        allGames: gamesByGenre,
      };

    case ORDER_VIDEOGAMES_ALPHATICALLY:
      let orderGames = [...state.allGamesCopy].sort((a, b) => {
        if(payload === "A"){
          return a.name.localeCompare(b.name)
        }else if(payload === "D"){
          return b.name.localeCompare(a.name)
        }else{
          return 0
        }
      })
      return {
        ...state,
        allGames: orderGames
      }
              
    case ORDER_VIDEOGAMES_BY_RATING:
      let orderGamesByRating = [...state.allGamesCopy].sort((a, b) => {
        if (payload === "H") {
          return a.rating - b.rating;  
        } else if (payload === "L") {
          return b.rating - a.rating;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        allGames: orderGamesByRating
      };
          
    case POST_GAME:
      return{
        ...state, 
        allGames: [payload, ...state.allGames],
        allGamesCopy: [payload, ...state.allGamesCopy]
      }

    case NO_RESULTS_FOUND:
      return{
        ...state,
      }
        
    default:
      return {...state}
    }
    
}

export default rootReducer

