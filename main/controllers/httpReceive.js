// save message on db
// establish mongodb connection
// take all values and sum them
// send bus command on redis {idMessage: randomlyGeneratedInt, value: sumOfValues}

const saveAndSend = ((req, res) => {
    console.log(req.body)
    res.sendStatus(200);
});

module.exports = {
    saveAndSend
}