var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const validarCadastro = require("../middlewares/ValidarCadastro")

// GET users
router.get('/', usuariosController.index);
// POST users
router.post('/', validarCadastro, usuariosController.create);
// UPDATE users
router.put('/:id', validarCadastro, usuariosController.update);
// DELETE users
router.delete('/:id', usuariosController.delete);

module.exports = router;
