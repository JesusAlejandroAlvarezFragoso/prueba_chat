// Librerias
const
	mongoose = require('mongoose')
;

// Constantes
const
	config = require('../../config/db')
;

console.log(config);
// Conectamos
mongoose.connect(config.db_host);


module.exports = {
	'db': mongoose
};
