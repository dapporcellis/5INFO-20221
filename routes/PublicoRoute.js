const express = require("express");
const router = express.Router();
const publicoController = require("../controller/PublicoController");

//abrir tela
router.get("/index", publicoController.index);

//salvar dados
router.get("/fotos", publicoController.fotos);

//listar tudo
router.get("/contatos", publicoController.contatos);

//listar com filtro
router.get("/sobre", publicoController.sobre);

module.exports = router;
