const axios = require("axios");
const{ Videogame } = require("../db");
const { APY_KEY } = process.env;

const numberOfgamesFromDB = (gamesDB) => {
    if(gamesDB !== undefined && gamesDB.length <= 15){
        return 15 - gamesDB.length
    }
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

const getAllVideogameByName = async (name) => {
    try {
        //const videogamesFromDB = await Videogame.findAll({where: {name: { [Op.iLike]: `%${name}%`}}});

        /*const remanente = numberOfgamesFromDB(videogamesDB);
        console.log(remanente)*/
        //http://api.rawg.io/api/games?key=${APY_KEY}&search=${name}

        const {data} = await axios(`https://api.rawg.io/api/games?search=${name}&key=${APY_KEY}`);
        
        const videogamesAPI = await videogamesFiltered(data.results);
        
        const videogamesFromAPI = [];

        for(let i = 0; i < 5; i ++){
            videogamesFromAPI.push(videogamesAPI[i])
        };
        console.log(videogamesFromAPI)
        return [...videogamesFromAPI];
    } catch (error) {
        throw new Error({error: error.message})
    }
}
module.exports = getAllVideogameByName