// Controlador para o modelo Team

var Team = require('../models/team')
var Member = require('../models/member')

// Devolve a lista de equipas
module.exports.listar = () => {
    return Team
        .aggregate( { $project: {_id: 1, team: 1, pitch1: 1, pitch2: 1, techPitch: 1, businessReport: 1,
                    techReport: 1, memberCount: {$size: "$members"}}})
}

module.exports.consultar = id => {
    return Turma
        .findOne({_id: id})
        .exec()
}

module.exports.listarMember = (idTeam, idMember) => {
    return Turma
        .aggregate([{$unwind: "$members"},{$match: {_id: idTeam, "members.id": idMember}}])
        .exec()
}

module.exports.inserir = t => {
    var novo = new Team(t)
    return novo.save()
}

module.exports.inserirMember = (idTeam, m) => {
    var novo = new Member(m)
    return novo.save()
        .find({date: { "$regex":a }})
        .select('_id title date')
        .exec()
}

module.exports.remover = function(id){
    return Team.deleteOne({_id: id})
}
