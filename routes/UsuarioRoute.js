const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/UsuarioController");

const upload = require("../config/upload");

//abrir tela
router.get("/add", UsuarioController.abreadd);

//salvar dados
router.post("/add", upload.single("foto"), UsuarioController.add);

//listar tudo
router.get("/lst", UsuarioController.lst);

//listar com filtro
router.post("/lst", UsuarioController.filtro);

//abrir edita
router.get("/edt/:id", UsuarioController.abreedt);

//editar dados
router.post("/edt/:id", upload.single("foto"), UsuarioController.edt);

//deletar dados
router.get("/del/:id", UsuarioController.deleta);

module.exports = router;
