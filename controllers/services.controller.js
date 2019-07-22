var serviceModel = require('./../models/services.model');

exports.services_all_get = function(req, res){
    serviceModel.findAll({
        attributes:['id', 'name', 'image', 'happyEnd']
    })
    .then(data => res.json(data))
    .catch(data => res.status(500, err))
}

exports.services_get_detail = function(req, res){
    //res.send(req.params.id)
}