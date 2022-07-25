const Foto = require("../model/Foto");
const Usuario = require("../model/Usuario");

function abreadd(req, res) {
  Usuario.find({}).then(function (usuarios) {
    res.render("foto/add.ejs", { Login: req.user, Usuarios: usuarios });
  });
}
function add(req, res) {
  var foto = new Foto();
  console.log(req.body);
  foto.titulo = req.body.titulo;
  foto.foto = req.file.filename;
  foto.usuarios = req.body.usuarios;
  foto.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/foto/lst");
    }
  });
}
function lst(req, res) {
  console.log(req.user);
  Foto.find({})
    .populate("usuario")
    .then(function (fotos) {
      res.render("foto/lst.ejs", { Fotos: fotos, Login: req.user });
    });
}
function filtro(req, res) {
  var pesquisa = req.body.pesquisa;
  Foto.find({ titulo: new RegExp(pesquisa, "i") }).then(function (fotos) {
    res.render("foto/lst.ejs", { Fotos: fotos, Login: req.user });
  });
}
function abreedt(req, res) {
  Foto.findById(req.params.id).then(function (foto) {
    res.render("foto/edt.ejs", { Foto: foto, Login: req.user });
  });
}
function edt(req, res) {
  Foto.findByIdAndUpdate(
    req.params.id,
    {
      titulo: req.body.titulo,
      texto: req.body.texto,
      usuario: req.user.id,
      foto: req.file.filename,
    },
    function (err, result) {
      if (err) {
        res.send("Aconteceu o seguinte erro: " + err);
      } else {
        res.redirect("/foto/lst");
      }
    }
  );
}
function deleta(req, res) {
  Foto.findByIdAndDelete(req.params.id).then(function (valor) {
    res.redirect("/foto/lst");
  });
}

module.exports = { abreadd, add, lst, filtro, abreedt, edt, deleta };
