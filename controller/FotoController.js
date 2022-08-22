const Foto = require("../model/Foto");
const Usuario = require("../model/Usuario");

function abreadd(req, res) {
  Usuario.find({}).then(function (usuarios) {
    res.render("foto/add.ejs", { Login: req.user, Usuarios: usuarios });
  });
}
function add(req, res) {
  var foto = new Foto();
  foto.titulo = req.body.titulo;
  foto.foto = req.file.url;
  foto.usuarios = req.body.usuarios;

  foto.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      let i;
      for (i = 0; i < req.body.usuarios.length; i++) {
        Usuario.findById(req.body.usuarios[i]).then(function (usuario) {
          usuario.fotos.push(result._id);
          usuario.save();
        });
      }
      res.redirect("/fotos/lst");
    }
  });
}
function lst(req, res) {
  Foto.find({})
    .populate("usuarios")
    .then(function (fotos) {
      res.render("foto/lst.ejs", { Fotos: fotos, Login: req.user });
    });
}
function filtro(req, res) {
  var pesquisa = req.body.pesquisa;
  Foto.find({ titulo: new RegExp(pesquisa, "i") })
    .populate("usuarios")
    .then(function (fotos) {
      res.render("foto/lst.ejs", { Fotos: fotos, Login: req.user });
    });
}
function abreedt(req, res) {
  Usuario.find({}).then(function (usuarios) {
    Foto.findById(req.params.id).then(function (foto) {
      res.render("foto/edt.ejs", {
        Foto: foto,
        Login: req.user,
        Usuarios: usuarios,
      });
    });
  });
}
function edt(req, res) {
  Foto.findByIdAndUpdate(
    req.params.id,
    {
      titulo: req.body.titulo,
      usuarios: req.body.usuarios,
      foto: req.file.url,
    },
    function (err, result) {
      if (err) {
        res.send("Aconteceu o seguinte erro: " + err);
      } else {
        res.redirect("/fotos/lst");
      }
    }
  );
}
function deleta(req, res) {
  console.log();
  Foto.findByIdAndDelete(req.params.id)
    .populate("usuarios")
    .then(function (valor) {
      console.log(valor);
      let i;
      for (i = 0; i < valor.usuarios.length; i++) {
        Usuario.findById(valor.usuarios[i]).then(function (usuario) {
          usuario.fotos.splice(usuario.fotos.indexOf(valor._id), 1);
          usuario.save();
        });
      }
      res.redirect("/fotos/lst");
    });
}

module.exports = { abreadd, add, lst, filtro, abreedt, edt, deleta };
