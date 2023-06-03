const mongoose = require('mongoose');// codial se utha ke yahan lga diya
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://tusharkumar:hEnQr3NafwL0ph64@tusharpollingapi.pafbxlt.mongodb.net/tusharPollingAPI?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error' , console.error.bind(console, 'Error connecing to Mongodb'));

db.once('open' , function(){
    console.log('connected to DataBase :: MongoDB')
});

module.exports = db ; 


// // Import the mongoose module
// const mongoose = require('mongoose'); //comment kar ke
// const dotenv = require('dotenv').config();

// //Set up default mongoose connection
// var mongoDB = process.env.MONGODB_URL;
// module.exports = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));
