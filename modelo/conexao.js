const banco = require("mongoose");


banco.connect("mongodb://127.0.0.1:27017/livraria", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  
})
  .then(() => {
    console.log("Conectado ao banco MongoDB! 📦");
  })
  .catch((err) => console.log(err));



  module.exports = banco.connection;

