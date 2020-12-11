import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Servicios
import { SocketioService } from '../socketio.service';

// Interfaces
import { Message } from './message';
import { User } from '../user/user';

@Injectable({
	providedIn: 'root'
})
export class MessageService {
	socket: SocketioService;
	messages: Message[];
	user: User;

	constructor(
		socket: SocketioService
	){
		this.socket = socket;
	}

	getMessages(user: User): Observable<Message[]> {
		this.messages = [];
		this.user = user;

		this.socket
			.syncMessages()
			.subscribe((message)=>{
				this.messages.push(message);
			})
		;

		return of(this.messages);
	}

	send(message:string): void {
		let mess: Message = {
			id:'',
			body: message,
			date: '...',
			user: this.user
		};
		this.socket.sendMessage(mess);
	}
}
