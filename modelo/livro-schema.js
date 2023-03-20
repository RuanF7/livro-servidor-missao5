const banco = require("mongoose");

const Schema = banco.Schema;
const ObjectId = Schema.ObjectId;

const LivroSchema = new Schema({
  id: ObjectId,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String],

});

const Livro = banco.model("Livro", LivroSchema);

module.exports = Livro;

