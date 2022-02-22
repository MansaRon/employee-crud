//require('dotenv').config();
const username = encodeURIComponent("MansaRon");
const password = encodeURIComponent("TheGreat@95");
const mongoString = "mongodb+srv://" + username + ":" + password + "@thendocluster.1gxlw.mongodb.net/test"

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {console.log('Server running at ' + 3000);})