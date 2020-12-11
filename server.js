require('./config/global');

//Librerias
const
	socketIO = require('socket.io'),
	express = require('express'),
	http = require('http'),
	path = require('path')
;

//constantes
const
	app = express(),
	port = process.env.PORT,
	public_path = path.resolve(__dirname, 'chatTest/dist/chatTest')
;

let server = http.createServer(app);

//Rutas publicas
app.use(express.static(public_path));

// Sockets
module.exports.io = socketIO(server, {
	cors: {
		origin: 'http://localhost:4200',
		methods: ['GET', 'POST'],
		secure: false
	}
});
require('./server/sockets/index');

//Rutas de api
const api_routes = require('./server/routes/api');
app.use('/', api_routes);

//Escucha para correr servidor
server.listen(port, (err)=>{
	if (err) {
		throw new Error(err);
	}

	console.log(`Servidor corriendo en puerto ${ port }`);
});
