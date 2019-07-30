var express = require('express');
var router = express.Router();
var booksController = require('../controllers/books.controller');
/* POST books services. */
router.post('/', booksController.book_create);
module.exports = router;