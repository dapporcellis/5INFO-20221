const express = require("express");
const app = express();
const porta = 3000;

app.get("/", (req, res) => {
  res.send("Oi Mundo!");
});

app.listen(porta, () => {
  console.log("Servidor funcionando na porta 3000");
});
