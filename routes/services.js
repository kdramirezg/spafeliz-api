var express = require('express');
var router = express.Router();
var servicesController = require('../controllers/services.controller');
/* GET services listing. */
router.get('/', servicesController.services_all_get);
router.get('/:id', servicesController.services_get_detail);
  
module.exports = router;
