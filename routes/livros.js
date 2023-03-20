
var express = require('express');
var router = express.Router();

const Controller = require('../modelo/livro-dao');

router.post("/livro", Controller.incluir);
router.get("/livro", Controller.obterLivros);
router.delete("/livro/:id", Controller.excluir);


module.exports = router;