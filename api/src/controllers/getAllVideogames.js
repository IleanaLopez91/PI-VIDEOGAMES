const axios = require("axios");
const { Videogame } = require("../db");
const { APY_KEY } = process.env;

const paginado = async() => {
    let apiGames = [];
    for(let i = 1; i <=2; i++){
        const {data} = await axios.get(`http://api.rawg.io/api/games?key=${APY_KEY}`);
        console.log (data)
        apiGames = [...apiGames, ...data.results]
    }
    console.log(apiGames)
    return apiGames;
}

const videogamesFiltered = (games) => {
    return games.map((game) => {
        return {
            id: game.id,
            name: game.name,
            description: game.description,
            platform: game.platforms.map((el)=>el.platform.name),
            background_image: game.background_image,
            released: game.released,
            rating: game.rating,
            genres: game.genres.map((el) => el.name)
        }
    })
}

const getAllVideogames = async() => {
    try {
        const videogamesDB = await Videogame.findAll();
        const videogamesAPI = videogamesFiltered(await paginado());
        const allVideogames = [...videogamesDB, ...videogamesAPI];
        console.log(allVideogames)
        return allVideogames
    } catch (error) {
        throw new Error({error: error.message})
    }
}

module.exports = getAllVideogames