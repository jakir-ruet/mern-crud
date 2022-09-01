
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config.json');
const http = require('http');
const { connectDB } = require("./config/db/dbConnection.js");
const { router } = require('./routes/Route.js');
const morgan = require('morgan')

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
// app.use((_, res) => res.status(200).send("Hello World!"))

//listing configuration
const PORT = config.port || 8080;

http.createServer(app).listen(PORT, config.hostname, () => {
    console.log(`app listening at http://localhost:${PORT}`)
});
connectDB()
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err))