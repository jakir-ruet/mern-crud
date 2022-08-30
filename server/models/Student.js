const { Schema, model } = require('mongoose');
const { nameValidator, ageValidator } = require('../validator/validator.js');

const studentSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true,
      validate: {
         validator: nameValidator,
         message: n => nameValidator(n)['name']
      }
   },
   fatherName: {
      type: String,
      required: true,
      trim: true,
      validate: {
         validator: nameValidator,
         message: n => nameValidator(n)['name']
      }
   },
   age: {
      type: Number,
      validate: {
         validator: ageValidator,
         message: a => ageValidator(a)['age']
      }
   }
});

const Student = model('student', studentSchema);

module.exports = { Student }