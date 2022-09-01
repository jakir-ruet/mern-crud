const { Student } = require('../models/Student.js');

const userController = {
   createStudent: ({ body }, res) => {
      const { name, fatherName, email } = body;
      (!body || Object.keys(body).length === 0)
         ? res.status(404).send('All data required') : (() => {
            Student.create({ name, fatherName, email })
               .then(() => res.status(201).send('Student created'))
               .catch(err => res.status(400).send(`${err}`));
         })();
   },
   findStudent: ({ body, query }, res) => {
      Student.findOne(body, (err, doc) => {
         err ? (() => { throw err })() :
            !doc ? res.status(404).send('email not found') :
               (() => {
                  Student.findOne(body, {}, (err, doc) => {
                     err ? (() => { throw err })() : (() => {
                        !query.prop ?
                           res.status(200).json(doc) :
                           res.status(200).json(doc[prop]);
                     });
                  });
               })();
      })
   },
   updateStudent: ({ body: { email, update } }, res) => {
      Student.findOne({ email }, (err, doc) => {
         err ? (() => { throw err })() :
            !doc ? res.status(400).send('email not found') :
               !update ? res.status(400).send('update required for updating') :
                  update.email ? res.status(400).send('You cannot update email') : (() => {
                     Student.findOneAndUpdate({ email }, update)
                        .then(() => res.status(200).send('Student updated'))
                        .catch(err => res.status(400).send(`Error occurred: ${err.message}`))
                  })();
      })
   },
   deleteStudent: ({ body: { email } }, res) => {
      Student.findOne({ email }, {}, (err, doc) => {
         err ? (() => console.log(err.message))() :
            !doc ? res.status(400).send('email not found') :
               Student.findOneAndDelete({ email })
                  .then(() => res.status(200).send('Student deleted'))
      });
   }
}

module.exports = userController;