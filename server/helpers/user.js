module.exports = {
	async count(io) {
		let
			res = await io.allSockets(),
			total = 0 
		;

		for (let e of res.entries()) {
			total++;
		}

		return total;
	}
};
