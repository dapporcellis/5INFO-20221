var passport = require("passport");
var LocalStrategy = require("passport-local");
var Usuario = require("../model/Usuario");

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
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
  })
);

module.exports = passport;
