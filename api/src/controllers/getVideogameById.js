const axios = require("axios");
const { Videogame } = require("../db");
const { APY_KEY } = process.env;

const isUUID = (id) => {
    return id.includes("-");
  };


const cleanObject = (obj) => {
  return {
    id: obj.id,
    name: obj.name,
    description: obj.description,
    platform: obj.platforms.name,
    image: obj.background_image,
    released: obj.released,
    rating: obj.rating,
    genres: obj.genres.name,
  };
};

const getVideogameById = async (id) => {
    try {
      /*if (isUUID(id)) {
        const gamesFromDB = await Videogame.findAll({ where: { id: id } });
        return gamesFromDB;
      }*/
      const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APY_KEY}`);
      console.log(data)
      const gameByIdApi = cleanObject(data);
      console.log(gameByIdApi)
      return gameByIdApi;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  module.exports = getVideogameById