var bookModel = require('../models/book.model');
exports.book_create = function(req, res){
    let book = req.body;
    console.log(req.body);
    bookModel.create({
        name : book.name,
        mail : book.mail,
        date : book.date,
        time : book.time,
        idservice : book.serviceSelected
    })
    .then(data => res.json(data))
    .catch(err => res.status(500).send(err))
}