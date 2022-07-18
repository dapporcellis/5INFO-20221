const express = require("express");
const router = express.Router();
const PostagemController = require("../controller/PostagemController");

const upload = require("../config/upload");

//abrir tela
router.get("/add", PostagemController.abreadd);

//salvar dados
router.post("/add", upload.single("foto"), PostagemController.add);

//listar tudo
router.get("/lst", PostagemController.lst);

//listar com filtro
router.post("/lst", PostagemController.filtro);

//abrir edita
router.get("/edt/:id", PostagemController.abreedt);

//editar dados
router.post("/edt/:id", upload.single("foto"), PostagemController.edt);

//deletar dados
router.get("/del/:id", PostagemController.deleta);

module.exports = router;
