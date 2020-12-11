// Importamos conexion rápida
const { db } = require('../helpers/db');

// schema
const messageSchema = new db.Schema({
	body: String,
	date: String,
	user: Object
});

// model
const Message = db.model('Message', messageSchema);

module.exports = {
	messageSchema,
	Message
};
