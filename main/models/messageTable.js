const schema = new mongoose.Schema({ idMessage: Number, message: String, idReference: Number, referenceDateTime: Date, createDateTime: { type: Date, default: Date.now()}, updateDateTime: Date});
const MessageTable = mongoose.model('MessageTable', schema);

module.exports = MessageTable;