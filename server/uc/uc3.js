//const { Message } = require('../models/message');

module.exports = {
	uc3(client, message) {
		console.log('Mensaje emitido', message);

		let
			date = new Date(),
			minutes = date.getMinutes()
		;

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		message.date = date.getHours() + ':' + minutes;

		let message_reg = message;//new Message(message);

		client.broadcast.emit('message_send', message_reg);
		client.emit('message_send', message_reg);
	}
};
