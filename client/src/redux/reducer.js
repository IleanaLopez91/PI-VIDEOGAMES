import { GET_ALLGAMES, SET_GAMES, FILTER, ORDER, CLEAN_ALL, GET_GENRES, POST_GAME} from "./actionsTypes";

const inicialState = {
    allGames: [],
    genres: [],
    gameByName: [],
    page: 1,
    gamesPerPage: 5
}

const rootReducer = (state = inicialState, {type, payload}) => {
    switch(type){

        case GET_ALLGAMES:
            return{
                ...state,
                allGames: payload
            }

        case SET_GAMES:
            return{
                ...state,
                allGames: payload
            }

        case FILTER:
            let copy1 = state.allGames.filter((game) => {
                return game.genre === payload
            });
            return{
                ...state,
                allGames: copy1
            }

        case ORDER:
            let copy2 = state.allGames;
            let orderGames = copy2.sort((a, b) => {
                if(payload === "A"){
                    return a.name - b.name
                }else if(payload === "D"){
                    return b.name - a.name
                }else{
                    return 0
                }
            })
            return {
                ...state,
                allGames: orderGames
            }

        case CLEAN_ALL:
            return{
                ...state,
                allGames: []
            }

        case GET_GENRES:
            return{
                ...state, genres: payload
            }

        case POST_GAME:
            return{
                ...state, allGames: payload
            }

        default:
            return {...state}
    }
}

export default rootReducer