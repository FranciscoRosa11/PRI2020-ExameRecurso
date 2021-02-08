var express = require('express');
var router = express.Router();
const Casamento = require('../controllers/casamento')

/* GET home page. */

router.get('/teams', function(req, res) {
    Team.listar(req.query.nome)
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({error: e}))
});

router.get('/teams/:id/members/:idMember', function(req, res) {
  Team.listarMember(req.params.idMember)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

router.get('/teams/:id', function(req, res) {
  Team.consultar(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

router.post('/teams', function(req,res) {
  Team.inserir(req.body)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
})

router.post('/teams/:id/members', function(req,res) {
  Team.inserirMember(req.body)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
})

// Remover uma tarefa
router.delete('/teams/:id', function(req, res) {
  Team.remover(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

module.exports = router;