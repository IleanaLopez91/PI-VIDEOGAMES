const axios = require("axios");
const { Genre } = require("../db");
const { APY_KEY }= process.env;

const cleanGenre = (arr) => {
    return arr.map((elm) => {
      return {
        name: elm.name,
      };
    });
  };

const getAllGenres = async() => {
    const genresDB = await Genre.findAll();
    if(genresDB.length > 0){
        return genresDB
    };
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${APY_KEY}`);
    const genresAPI = await cleanGenre(response.data.results);
    console.log(genresAPI)
    await Genre.bulkCreate(genresAPI);
    return [...genresDB, ...genresAPI];
}

module.exports = getAllGenres