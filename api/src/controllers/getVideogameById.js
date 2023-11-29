const axios = require("axios");
require('dotenv').config();
const {APY_KEY} = process.env

const URL = "https://api.rawg.io/api/games/"
//https://api.rawg.io/api/games/3498?key=d4f1c269996c4da4b2a27f110842496b

const getVideogameById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${URL}${id}?key=${APY_KEY}`)
        console.log(response.data)
        if(response.data){
            const {id, name, description, platforms, background_image, released, rating} = response.data;
            const platformNames = platforms && platforms.map(plat => plat.platform.name);
            const game = {id, name, description, platformNames, background_image, released, rating}
            res.status(200).json(game)
        }else{
            res.status(404).json({message: "Game not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

module.exports = getVideogameById