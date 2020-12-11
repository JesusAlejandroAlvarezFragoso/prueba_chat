import { Component, OnInit } from '@angular/core';

//Servicios
import { MessageService } from './message/message.service';
import { RoomService } from './room/room.service';
import { UserService } from './user/user.service';
import { SocketioService } from './socketio.service';

//Interfaces
import { Message } from './message/message';
import { Room } from './room/room';
import { User } from './user/user';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	messageService: MessageService;
	roomService: RoomService;
	messages: Message[];
	room: Room;
	user: User;

	constructor(
		private userService: UserService,
		private socketioService: SocketioService
	)
	{
		this.roomService = new RoomService(this.socketioService);
		this.messageService = new MessageService(this.socketioService);
	}

	ngOnInit() {
		this.getRoom();
		this.getUser();
		this.getMessages();
	}

	getRoom(): void {
		this.roomService
			.getRoom()
			.subscribe((room) => this.room = room)
		;
	}
	getUser(): void {
		this.userService
			.getUser()
			.subscribe((user) => this.user = user)
		;
	}
	getMessages(): void {
		this.messageService
			.getMessages(this.user)
			.subscribe((messages) => this.messages = messages)
		;
	}
}
