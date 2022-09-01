<<<<<<< HEAD


module.exports = {
   nameValidator: name => {
      let length = name?.length
      let errors = {};

      if (!name) {
         errors['name'] = "Name's required";
      };
      if (!(length < 20)) {
         errors['name'] = "Name's length maxium 20";
      };
      if (!(length > 3)) {
         errors['name'] = "Name's length must be 3";
      };
      errors['isValidate'] = Object.keys(errors) == 0;

      return errors;
   },
   ageValidator: age => {
      let errors = {};

      if (!age) {
         errors['age'] = "Age's required"
      }
      if (!(age < 18)) {
         errors['age'] = "Age's maxium 18"
      }
      if (!(age > 5)) {
         errors['age'] = "Age's must be 5"
      }
      errors['isValidate'] = Object.keys(errors) == 0;

      return errors;
   },
}
=======


module.exports = {
   nameValidator: name => {
      let length = name?.length
      let errors = {};

      if (!name) {
         errors['name'] = "Name's required";
      }
      ;
      if (!(length < 20)) {
         errors['name'] = "Name's length maxium 20";
      }
      ;
      if (!(length > 3)) {
         errors['name'] = "Name's length must be 3";
      }
      ;
      errors['isValidate'] = Object.keys(errors) == 0;

      return errors;
   },
   ageValidator: age => {
      let errors = {};

      if (!age) {
         errors['age'] = "Age's required"
      }
      if (!(age < 18)) {
         errors['age'] = "Age's maxium 20"
      }
      if (!(age > 5)) {
         errors['age'] = "Age's must be 3"
      }
      errors['isValidate'] = Object.keys(errors) === 0;

      return errors;
   }
}
>>>>>>> cb79db8ee412470bf55b2ef3976c3d0802337960
