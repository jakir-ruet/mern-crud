const { Schema, model } = require('mongoose');
const { nameValidator, ageValidator } = require('../validator/validator.js');

const studentSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true,
      validate: {
         validator: v => nameValidator(v).isValidate,
         message: n => nameValidator(n.value).name
      }
   },
   fatherName: {
      type: String,
      required: true,
      trim: true,
      validate: {
         validator: v => nameValidator(v)['isValidate'],
         message: n => nameValidator(n)['name']
      }
   },
   age: {
      type: Number,
      validate: {
         validator: v => ageValidator(v)['isValidate'],
         message: a => ageValidator(a)['age']
      }
   },
   email: {
      type: String,
      unique: [true, "Email's unique"],
      required: [true, "Email's required"]
   }
});

const Student = model('student', studentSchema);

module.exports = { Student }