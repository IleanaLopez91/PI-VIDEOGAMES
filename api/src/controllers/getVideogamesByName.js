const axios = require("axios");
require('dotenv').config();
const {APY_KEY} = process.env

//https://api.rawg.io/api/games?search={game}

const getAllVideogameByName = async (req, res) => {
    try {
        const { search } = req.query;
        const toLower = search.toLowerCase()
        const response = await axios.get(`http://api.rawg.io/api/games?key=${APY_KEY}`)
        const allgames = response.data.results;
        const arraygames = allgames.filter(game => game.name.toLowerCase().includes(toLower)).slice(0, 15);
        res.status(200).json(arraygames)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = getAllVideogameByName