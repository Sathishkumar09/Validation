const express = require('express');
const mongoose = require('mongoose');
const { storeUserValidator } = require('./schema/validation/valid');
const { UserDetails } = require('./controller/controller');

const app = express();
app.use(express.json());


async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/validation', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}


connectDB();



app.post('/user', storeUserValidator, UserDetails);





app.listen(9090, () => {
    console.log('App Running On Port 9090');
});