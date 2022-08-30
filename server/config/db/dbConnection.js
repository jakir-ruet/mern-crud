const mongoose = require('mongoose');
const config = require('../config.json')

const connectDB = async () => {
   await mongoose.connect(config.dbConfig.dbUri, {
      dbName: config.dbConfig.dbName
   });
};

module.exports = { connectDB }