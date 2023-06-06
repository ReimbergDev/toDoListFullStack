const express = require('express');
const router = express.Router();


router.get('/', (require, response) => {response.status(200).send('o router está funcionando')});

module.exports = router;

//PAREI NO MINUTO 20 DO VIDEO DE CRIAÇAO DA TO DO LIST