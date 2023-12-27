const { Router } = require('express');
const getAllVideogamesHandler = require('../handlers/getAllVideogamesHandler');
const getVideogameByIdHandler = require('../handlers/getVideogameById');
const getGenresHandler = require('../handlers/getGenresHandler');
const postVideoGames = require('../handlers/postVideogame');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", getAllVideogamesHandler);

router.get("/videogames/:id", getVideogameByIdHandler);

router.post("/videogames", postVideoGames)

router.get("/genres", getGenresHandler);

module.exports = router;
