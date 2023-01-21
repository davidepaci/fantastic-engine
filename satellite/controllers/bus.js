// create redis client
// subscribe to 'bus' channel
// on message, save it on db
// send message back

const mongoose = require('mongoose');
const ReferencesTable = require('../models/referencesTable.js');
require('dotenv').config()
const redis = require('redis');

const redisClient = redis.createClient();

redisClient.connect().then(() => {
    console.log("[✅ SATELLITE] Redis connected");
});

redisClient.subscribe('bus', (message) => {
    // parse message as object
    message = JSON.parse(message);
    // save message on db
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI2, { useNewUrlParser: true, useUnifiedTopology: true });
    // generate randomId
    let randomInt = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
    // get now
    let now = Date.now();
    // create a ReferencesTable
    const reference = new ReferencesTable({
        idReference: randomInt,
        idMessage: message.idMessage,
        value: message.value,
        referenceDateTime: now
    });
    // save the message
    reference.save(function (err) {
        if (err) throw err;
        console.log('Reference saved successfully!');
    });
    // duplicate client and send message back
    const redisDuplicate = redis.createClient();
    redisDuplicate.connect();
    redisDuplicate.publish('main', JSON.stringify({ idReference: randomInt, idMessage: message.idMessage, referenceDateTime: now }));
});