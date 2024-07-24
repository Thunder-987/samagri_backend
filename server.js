const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
let bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS)
    .then(() => {
        app.listen(3000, () => console.log("server is up and running"));
    })

app.get('/', (req, res) => {
    res.send({a:"hello my name ios pavan karthik"})
})
