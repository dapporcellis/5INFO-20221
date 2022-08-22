function index(req, res) {
  res.render("publica/index.ejs");
}

function fotos(req, res) {
  res.render("publica/post.ejs");
}

function contatos(req, res) {
  res.render("publica/contact.ejs");
}

function sobre(req, res) {
  res.render("publica/about.ejs");
}

module.exports = { index, fotos, contatos, sobre };
