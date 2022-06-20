const Usuario = require("../model/Usuario");

function abreadd(req, res) {
  res.render("usuario/add.ejs");
}
function add(req, res) {
  var nome = req.body.nome;
  var email = req.body.email;
  var senha = req.body.senha;
  var foto = req.body.foto;
  var usuario = new Usuario();
  usuario.nome = nome;
  usuario.email = email;
  usuario.senha = senha;
  usuario.foto = foto;
  usuario.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.send("Seus dados foram inseridos com sucesso!");
    }
  });
}
function lst(req, res) {
  Usuario.find({}).then(function (usuarios) {
    res.render("usuario/lst.ejs", { Usuarios: usuarios });
  });
}
function filtro(req, res) {}
function abreedt(req, res) {}
function edt(req, res) {}
function deleta(req, res) {}

module.exports = { abreadd, add, lst, filtro, abreedt, edt, deleta };
