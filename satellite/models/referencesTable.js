const mongoose = require('mongoose');

const schema = new mongoose.Schema({ idReference: Number, idMessage: Number, value: Number, dateTime: { type: Date, default: Date.now()} });
const MessageTable = mongoose.model('ReferencesTable', schema);

module.exports = MessageTable;