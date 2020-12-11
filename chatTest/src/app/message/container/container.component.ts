import { Component, OnInit, Input } from '@angular/core';

//Servicios
import {MessageService} from '../message.service';

//Interfaces
import { User } from '../../user/user';
import { Message } from '../message';

@Component({
	selector: 'message-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.sass'],
})
export class MessageContainerComponent implements OnInit {
	@Input() messageService: MessageService
	@Input() messages: Message[];
	@Input() user: User;

	constructor() {}
	ngOnInit() {}

	isMyMessage(message: Message): boolean {
		return message.user.id == this.user.id;
	}
}
