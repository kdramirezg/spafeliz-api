var serviceModel = require('./../models/services.model');

exports.services_all_get = function(req, res){
    serviceModel.findAll({
        attributes:['id', 'name', 'description', 'image', 'cost', 'happyEnd']
    })
    .then(data => res.json(data))
    .catch(err => res.status(500).send(err))
}

exports.services_get_detail = function(req, res){
    serviceModel.findByPk(req.params.id, {
        attributes:['id', 'name', 'description', 'image', 'cost', 'happyEnd']
    })
    .then(data => res.json(data))
    .catch(err => res.status(500).send(err))
}