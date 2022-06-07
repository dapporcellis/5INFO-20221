const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/UsuarioController");

//abrir tela
router.get("/add", UsuarioController.abreadd);

//salvar dados
router.post("/add", UsuarioController.add);

//listar tudo
router.get("/lst", UsuarioController.lst);

//listar com filtro
router.post("/lst", UsuarioController.filtro);

//abrir edita
router.get("/edt", UsuarioController.abreedt);

//editar dados
router.post("/edt", UsuarioController.edt);

//deletar dados
router.get("/del", UsuarioController.deleta);

module.exports = router;
