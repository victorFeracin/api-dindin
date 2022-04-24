const listaDeCursos = require('../models/cursos.json');
const fs = require('fs');

const CursoController = {
  cadastrarCurso(req, res) {
    const { titulo, descricao, professor } = req.body;

    if(!titulo || !descricao || !professor) {
      return res
        .status(400)
        .json({ error: 'Insira os atributos corretamente.' });
    }

    listaDeCursos.push({
      titulo,
      descricao,
      professor,
    })

    fs.writeFileSync('./models/cursos.json', JSON.stringify(listaDeCursos));
  
    res.status(201).json({ message:"Cadastro efetuado com sucesso." });
  },

  deletarCurso(req, res) {
    try {
      const { titulo } = req.params;

      for(let i = 0; i < listaDeCursos.length; i++) {
        if(listaDeCursos[i].titulo == titulo) listaDeCursos.splice(i, 1);
      }

      fs.writeFileSync('./models/cursos.json', JSON.stringify(listaDeCursos));

      res.status(204).json();
    } catch {
      return res
        .status(400)
        .json({ error: ':( Não foi possível realizar a operação. Tente novamente.' });
    }
    
  },

  listarCursos(req, res) {
    try {
      return res.status(200).json(listaDeCursos);
    } catch {
      return res
        .status(400)
        .json({ error: ':( Não foi possível listar os cursos. Tente novamente.' });
    } 
  }
};

module.exports = CursoController;