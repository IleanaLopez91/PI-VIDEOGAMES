//https://api.rawg.io/api/genres

const axios = require ("axios");
const { Genre } = require("../db");
require('dotenv').config();
const {APY_KEY} = process.env

const getGenres = async (req, res) => {
    try {
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${APY_KEY}`)
        
        const allGenres = response.data.results;
        for(const genre of allGenres){
            await Genre.create({name: genre.name})
        }
        res.status(200).json({message: "Genres saved successfully."})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = getGenres