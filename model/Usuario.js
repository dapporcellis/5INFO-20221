const conexao = require("../config/database");

const UsuarioSchema = conexao.Schema({
  nome: {
    type: "String",
  },
  email: {
    type: "String",
  },
  senha: {
    type: "String",
  },
  foto: {
    type: "String",
  },
  fotos: [
    {
      type: conexao.Schema.Types.ObjectId,
      ref: "Foto",
    },
  ],
});

module.exports = conexao.model("Usuario", UsuarioSchema);
