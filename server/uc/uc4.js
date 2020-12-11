const users = require('../helpers/user');

module.exports = {
	async uc4(io) {
		//Obtenemos los usuarios conectados
		let total = await users.count(io);
		return {total};
	}
};
