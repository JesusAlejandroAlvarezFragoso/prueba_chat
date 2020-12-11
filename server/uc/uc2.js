const { uc4 } = require('./uc4');

module.exports = {
	async uc2(client, io) {
		console.log('Usuario desconectado');
		let res = await uc4(io);
		client.broadcast.emit('getTotalUsers', res);
	}
};
