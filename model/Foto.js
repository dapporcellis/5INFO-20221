const conexao = require("../config/database");

const FotoSchema = conexao.Schema({
  titulo: {
    type: "String",
  },
  data: {
    type: Date,
    default: Date.now,
  },
  foto: {
    type: "String",
  },
  usuarios: [
    {
      type: conexao.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
});

module.exports = conexao.model("Foto", FotoSchema);
