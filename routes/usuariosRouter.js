var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController')

// GET users
router.get('/', usuariosController.index);
// POST users
router.post('/', usuariosController.create);
// UPDATE users
router.put('/:id', usuariosController.update);
// DELETE users
router.delete('/:id', usuariosController.delete);

module.exports = router;
