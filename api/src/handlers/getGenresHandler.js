const getAllGenres = require("../controllers/getAllGenres")

const getGenresHandler = async (req, res) => {
    try {
      const genresApi = await getAllGenres();
      res.status(200).json(genresApi);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  module.exports = getGenresHandler;