const { uc4 } = require('./uc4');

module.exports = {
	async uc1(client, io) {
		console.log('Usuario conectado');
		let res = await uc4(io);

		client.broadcast.emit('getTotalUsers', res);
		client.emit('getTotalUsers', res);
	}
};
