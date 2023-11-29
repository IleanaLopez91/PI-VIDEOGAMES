const axios = require("axios");
require('dotenv').config();
const {APY_KEY} = process.env

const getAllVideogames = async (req, res) => {
    try {
        const response = await axios.get(`http://api.rawg.io/api/games?key=${APY_KEY}`)
        const arrayOfGames = response.data.results;
        //const arr = arrayOfGames.map(el => el.name)
        res.status(200).json(arrayOfGames)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = getAllVideogames