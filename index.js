const express = require("express");
const app = express();
const porta = 3000;
const path = require("path");
const usuarioRoute = require("./routes/UsuarioRoute");
const passport = require("./config/passport");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/usuario", usuarioRoute);

app.get("/", function (req, res) {
  res.render("login/login.ejs");
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.listen(porta, () => {
  console.log("Servidor funcionando na porta 3000");
});
