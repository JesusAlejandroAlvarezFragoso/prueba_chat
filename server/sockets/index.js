const
	{ io } = require('../../server.js'),
	cases = require('../uc')
;

io.on('connection', (client)=>{
	//Manejo default para conexiones
	cases.uc1(client, io);

	//Manejo de desconección
	client.on('disconnect', ()=>{
		cases.uc2(client, io);
	});

	//Manejo de envío de mensajes
	client.on('message_send', (message)=>{
		cases.uc3(client, message);
	});
});
