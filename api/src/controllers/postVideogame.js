const { Videogame } = require("../db.js");
require('dotenv').config();
const {APY_KEY} = process.env

const postVideoGames = async (req, res) => {
    try {
        const{ id, name, description, platforms, background_image, released, rating} = req.body;
        if(!name || !description || !platforms || !background_image || !released || !rating){
            return res.status(401).json({message: "Faltan datos"})
        }
        console.log({ name, description, platforms, background_image, released, rating})
        const newGame = await Videogame.findOrCreate({where: { name }, defaults : {id, description, platforms, background_image, released, rating}})
        res.status(200).json(newGame)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = postVideoGames;