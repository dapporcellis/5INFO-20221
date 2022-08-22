const Postagem = require("../model/Postagem");

function abreadd(req, res) {
  res.render("postagem/add.ejs", { Login: req.user });
}
function add(req, res) {
  var postagem = new Postagem();
  postagem.titulo = req.body.titulo;
  postagem.texto = req.body.texto;
  postagem.foto = req.file.path;
  postagem.usuario = req.user.id;
  postagem.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/postagem/lst");
    }
  });
}
function lst(req, res) {
  console.log(req.user);
  Postagem.find({})
    .populate("usuario")
    .then(function (postagens) {
      res.render("postagem/lst.ejs", { Postagens: postagens, Login: req.user });
    });
}
function filtro(req, res) {
  var pesquisa = req.body.pesquisa;
  Postagem.find({ titulo: new RegExp(pesquisa, "i") })
    .populate("usuario")
    .then(function (postagens) {
      res.render("postagem/lst.ejs", { Postagens: postagens, Login: req.user });
    });
}
function abreedt(req, res) {
  Postagem.findById(req.params.id).then(function (postagem) {
    res.render("postagem/edt.ejs", { Postagem: postagem, Login: req.user });
  });
}
function edt(req, res) {
  Postagem.findByIdAndUpdate(
    req.params.id,
    {
      titulo: req.body.titulo,
      texto: req.body.texto,
      usuario: req.user.id,
      foto: req.file.path,
    },
    function (err, result) {
      if (err) {
        res.send("Aconteceu o seguinte erro: " + err);
      } else {
        res.redirect("/postagem/lst");
      }
    }
  );
}
function deleta(req, res) {
  Postagem.findByIdAndDelete(req.params.id).then(function (valor) {
    res.redirect("/postagem/lst");
  });
}

module.exports = { abreadd, add, lst, filtro, abreedt, edt, deleta };
