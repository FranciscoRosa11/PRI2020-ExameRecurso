var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('localhost:3000/teams')
    .then(dados => res.render('teams', {teams: dados.data}))
    .catch(e => res.status(500).jsonp({error: e}))
});

module.exports = router;
