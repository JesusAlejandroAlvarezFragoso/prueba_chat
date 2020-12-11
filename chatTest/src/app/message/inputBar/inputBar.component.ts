import { Component, OnInit, Input } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
	selector: 'message-inputBar',
	templateUrl: './inputBar.component.html',
	styleUrls: ['./inputBar.component.sass']
})
export class MessageInputBarComponent implements OnInit {
	@Input() messageService: MessageService
	message: string = '';

	constructor() {}
	ngOnInit() {}

	send(): void {
		if (this.message=='') {
			return;
		}
		
		this.messageService.send(this.message);
		this.message = '';
	}
}
