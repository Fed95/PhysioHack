require('dotenv').config({path: './config/.env'});
const mongoose = require('mongoose');

const db = {
    init: () => {
        mongoose.promise = global.Promise;
        mongoose.connect(process.env.MONGODB, { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true});
        
        const connection = mongoose.connection;
        connection.once('open', () => console.log('MongoDB --  database connection established successfully!'));
        connection.on('error', (err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
            process.exit();
        });
    }
}

module.exports = db