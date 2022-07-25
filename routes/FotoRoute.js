const express = require("express");
const router = express.Router();
const FotoController = require("../controller/FotoController");

const upload = require("../config/upload");

//abrir tela
router.get("/add", FotoController.abreadd);

//salvar dados
router.post("/add", upload.single("foto"), FotoController.add);

//listar tudo
router.get("/lst", FotoController.lst);

//listar com filtro
router.post("/lst", FotoController.filtro);

//abrir edita
router.get("/edt/:id", FotoController.abreedt);

//editar dados
router.post("/edt/:id", upload.single("foto"), FotoController.edt);

//deletar dados
router.get("/del/:id", FotoController.deleta);

module.exports = router;
