const { Controller } = require('../controller/controller');
const router = require('express').Router();

const controller = new Controller();

router.route('/api')
   .post('/login', controller.create)

module.exports = { router }   
