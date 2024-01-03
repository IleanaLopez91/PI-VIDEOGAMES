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
      if(source === "api"){
        const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APY_KEY}`);
        return cleanObject(data);
      }else{
        return await Videogame.findByPk(id);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  module.exports = getVideogameById