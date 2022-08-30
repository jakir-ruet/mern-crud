const { Student } = require("../models/Student");

class Controller {
   create(req, res) {
      let { body } = body;
      if (Object.keys(body) == 0 || !body) {
         res.status(400).send("No data accepted from user");
      }
      else {
         Student.create({
            name: body.name,
            fatherName: body.fatherName,
            age: body.age
         })
            .then(() => res.status(201).send("Student created"))
            .catch(err => res.status(400).send(`Validation error ${err.message}`))
      }
      Student.create()
   }
}

module.exports = { Controller };