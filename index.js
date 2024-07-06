const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// let bodyParser = require('body-parser');
// const cors = require('cors');

dotenv.config();

mongoose.connect("mongodb+srv://pavanravitejaa:zdTb4bp0lRxrdiNf@samagriclustor.rqmqur0.mongodb.net/?retryWrites=true&w=majority&appName=SamagriClustor")
.then(()=>{
    console.log("connected")
})