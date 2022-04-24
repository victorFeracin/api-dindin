const express = require('express');
const CursoController = require('../controllers/cursos.controller.js');

const routes = express.Router();

routes.post('/cursos', CursoController.cadastrarCurso);
routes.delete('/cursos/deletar/:titulo', CursoController.deletarCurso);
routes.get('/cursos/lista', CursoController.listarCursos);
module.exports = routes;