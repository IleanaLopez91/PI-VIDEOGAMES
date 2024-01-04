const { Videogame, Genre } = require("../db.js");

const postVideoGames = async (req, res) => {
    const{ name, description, platforms, background_image, released, rating, genres} = req.body;
    try {
        if(!name || !description || !platforms || !background_image || !released || !rating || !genres){
            return res.status(401).json({message: "Missing data"})
        }
        const [createdGame, created] = await Videogame.findOrCreate({where: { name }, defaults : {name, description, platforms, background_image, released, rating}})
        
        if(!created){
            return res.status(400).json({ error: "The game already exists." });
        }

        const findGenres = await Genre.findAll({
            where: {
              name: genres,
            },
          });
      
        await createdGame.addGenres(findGenres);

        const updatedGame = await Videogame.findByPk(createdGame.id, {
            include: Genre,
        });

        res.status(200).json(updatedGame);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = postVideoGames;