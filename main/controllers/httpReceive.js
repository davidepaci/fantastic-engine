// establish mongodb connection
// save message on db
// take all values and sum them
// send bus command on redis {idMessage: randomlyGeneratedInt, value: sumOfValues}

const mongoose = require('mongoose');
const messageTable = require('../models/messageTable.js');
require('dotenv').config()

const saveAndSend = ((req, res) => {
    try {
        console.log(req.body)

        mongoose.connect(process.env.MONGO_URI1, { useNewUrlParser: true, useUnifiedTopology: true });
        // generate randomId
        let randomInt = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
        // create a MessageTable
        const message = new messageTable({
            idMessage: randomInt,
            message: JSON.stringify(req.body),
        });
        // save the message
        message.save(function (err) {
            if (err) throw err;
            console.log('Message saved successfully!');
        });
        // sum all values
        let sum = 0;
        for (let i = 0; i < req.body.length; i++) {
            sum += req.body[i].value;
        }
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = {
    saveAndSend
}