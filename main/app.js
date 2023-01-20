// Initialize express, controller, router and route
const express = require('express');
const cors = require('cors');
const app = express();

const httpController = require('./controllers/httpReceive.js');

app.use(cors());
app.use(express.json());

// Add listener
app.listen(3000, () => {
    console.log("[✅ MAIN] Server listening on port 3000");
});

app.use("/get", (req, res) => {
    res.send("Hello World!");
});

app.post("/send", httpController.saveAndSend);