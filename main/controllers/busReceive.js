const mongoose = require('mongoose');
const messageTable = require('../models/messageTable.js');
require('dotenv').config()
const redis = require('redis');

const subscriber = redis.createClient();
subscriber.connect();

subscriber.subscribe('main', (message) => {
    message = JSON.parse(message);
    // find message on db with idMessage, then update
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI1, { useNewUrlParser: true, useUnifiedTopology: true });
    messageTable.findOneAndUpdate({
        idMessage: message.idMessage
    }, {
        idReference: message.idReference,
        referenceDateTime: message.referenceDateTime,
        updateDateTime: Date.now()
    }, function (err, doc) {
        if (err) throw err;
        console.log('Message updated successfully!');
    });
});