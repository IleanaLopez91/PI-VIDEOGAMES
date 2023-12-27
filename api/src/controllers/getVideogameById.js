const axios = require("axios");
const { Videogame } = require("../db");
const { APY_KEY } = process.env;

const cleanObject = (obj) => {
  return {
    id: obj.id,
    name: obj.name,
    description: obj.description,
    platform: obj.platforms.map((el)=>el.platform.name),
    image: obj.background_image,
    released: obj.released,
    rating: obj.rating,
    genres: obj.genres.map((el) => el.name)
  };
};

const getVideogameById = async (id, source) => {
    try {
      /*if (isUUID(id))
        const gamesFromDB = await Videogame.findAll({ where: { id: id } });
        return gamesFromDB;
      }*/
      //const gameById = source === "api"
      //  ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${APY_KEY}`)).data
      //  : await Videogame.findByPk(id);

      //const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APY_KEY}`);

      if(source === "api"){
        const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APY_KEY}`);
        return cleanObject(data);
      }else{
        return await Videogame.findByPk(id);
      }
      
      //console.log(gameByIdApi)
      //return gameByIdApi;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  module.exports = getVideogameById