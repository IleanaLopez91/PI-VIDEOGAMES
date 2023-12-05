const { Videogame, Genre } = require("../db.js");

const postVideoGames = async (req, res) => {
    const{ name, description, platforms, background_image, released, rating, genres} = req.body;
    try {
        if(!name || !description || !platforms || !background_image || !released || !rating || !genres){
            return res.status(401).json({message: "Faltan datos"})
        }
        console.log({ name, description, platforms, background_image, released, rating})
        const [createdGame, created] = await Videogame.findOrCreate({where: { name }, defaults : {name, description, platforms, background_image, released, rating, genres}})
        if(!created){
            return res.status(400).json({ error: "El juego ya existe en nuestra biblioteca." });
        }

        const findGenres = await Genre.findAll({
            where: {
              name: genres,
            },
          });
      
        await createdGame.addGenres(findGenres);
        
        res.status(200).json({success: "Juego crado con exito"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = postVideoGames;