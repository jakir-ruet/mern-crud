const router = require('express').Router();
const userController = require('../controller/controller.js');

router
   .post('/create', userController.createStudent)
   .get('/find', userController.findStudent)
   .post('/update', userController.updateStudent)
   .post('/delete', userController.deleteStudent);
module.exports = { router };