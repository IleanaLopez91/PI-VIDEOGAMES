const { Router } = require('express');
const getAllVideogames = require('../controllers/getAllVideogames');
const getVideogameById = require('../controllers/getVideogameById');
const getGenres = require('../controllers/getGenres');
const postVideoGames = require('../controllers/postVideogame');
const getAllVideogameByName = require('../controllers/getVideogamesByName');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames/name", getAllVideogameByName);

router.get("/videogames", getAllVideogames);

router.get("/videogames/:id", getVideogameById);

router.post("/videogames", postVideoGames)

router.get("/genres", getGenres);

module.exports = router;
