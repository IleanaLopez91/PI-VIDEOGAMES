import { GET_ALLGAMES, FILTER, ORDER, GET_GENRES, POST_GAME} from "./actionsTypes";

const inicialState = {
    allGames: [],
    genres: [],
    orderGameByName: []
}

const rootReducer = (state = inicialState, {type, payload}) => {
    switch(type){

        case GET_ALLGAMES:
            return{
                ...state,
                allGames: payload,
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
                    return a.name.localeCompare(b.name)
                }else if(payload === "D"){
                    return b.name.localeCompare(a.name)
                }else{
                    return 0
                }
            })
            return {
                ...state,
                orderGameByName: orderGames
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