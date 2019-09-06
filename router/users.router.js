var express = require('express');
var router = express.Router();

var controller = require('../controller/users.controller');
var validate = require('../validate/users.validate');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/view/:id', controller.view);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;
