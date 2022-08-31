const { Schema, model } = require('mongoose');
const { nameValidator, ageValidator } = require('../validator/validator.js');
const validator = require('validator');

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
      type: [String, "Email must be a string"],
      minLength: [8, "Email's length must be 8"],
      maxLength: [40, "Email's length maximum 40"],
      required: [true, "Email's required"],
      unique: [true, "Email's unique"],
      validate: {
         validator: validator.isEmail,
         message: "Invalid Email"
      }
   }
});

const Student = model('student', studentSchema);

module.exports = { Student }