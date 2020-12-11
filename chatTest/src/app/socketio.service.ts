import { Observable, of } from 'rxjs';
import { io } from 'socket.io-client';

import { Message } from './message/message';

export class SocketioService {
	endpoint:string = 'http://localhost:3030';
	socket;

	constructor() {
		this.socket = io(this.endpoint);
		this.socket.on('connect', this.onConnect);
		this.socket.on('disconnect', this.onDisconnect);
	}

	onConnect() {
		console.log('Conectado al servidor');
	}
	onDisconnect() {
		alert('Perdimos conexión con el servidor...');
	}
	
	joinRoom(): Observable<number> {
		return Observable.create((observer) => {
			this.socket.on('getTotalUsers', (users) => {
				observer.next(users.total);
			});
		});
	}
	syncMessages(): Observable<Message> {
		return Observable.create((observer)=>{
			this.socket.on('message_send', (message)=>{
				observer.next(message);
			});
		});
	}

	sendMessage(message: Message): void {
		this.socket.emit('message_send', message);
	}
}
