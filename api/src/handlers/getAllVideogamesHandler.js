const getAllVideogames = require("../controllers/getAllVideogames");
const getAllVideogameByName = require("../controllers/getAllVideogamesByName")

const getAllVideogamesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const videogames = name ? await getAllVideogameByName(name) : await getAllVideogames();
        res.status(200).json(videogames);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getAllVideogamesHandler