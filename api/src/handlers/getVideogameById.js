const getVideogameById = require("../controllers/getVideogameById");

const getVideogameByIdHandler = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const source = isNaN(id) ? "bdd" : "api"
      const game = await getVideogameById(id, source);
      res.status(200).json(game);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = getVideogameByIdHandler