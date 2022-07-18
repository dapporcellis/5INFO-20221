const conexao = require("../config/database");

const PostagemSchema = conexao.Schema({
  titulo: {
    type: "String",
  },
  texto: {
    type: "String",
  },
  data: {
    type: Date,
    default: Date.now,
  },
  foto: {
    type: "String",
  },
  usuario: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

module.exports = conexao.model("Postagem", PostagemSchema);
