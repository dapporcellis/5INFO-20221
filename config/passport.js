var passport = require("passport");
var LocalStrategy = require("passport-local");
var Usuario = require("../model/Usuario");

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "senha" },
    function verify(username, password, cb) {
      Usuario.findOne({ email: username }).then(function (usuario) {
        if (!usuario) {
          return cb(null, false, {
            message: "Email não cadastrado.",
          });
        } else {
          if (usuario.senha != password) {
            return cb(null, false, {
              message: "Senha incorreta.",
            });
          } else {
            return cb(null, usuario);
          }
        }
      });
    }
  )
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, {
      id: user._id,
      email: user.email,
      foto: user.foto,
      nome: user.nome,
    });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

module.exports = passport;
