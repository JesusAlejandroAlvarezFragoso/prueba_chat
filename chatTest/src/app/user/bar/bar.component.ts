import { Component, OnInit, Input } from '@angular/core';

import { Room } from '../../room/room';
import { User } from '../user';

@Component({
  selector: 'user-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})

export class UserBarComponent implements OnInit {
	@Input() room: Room;
	@Input() user: User;
	menu_open = false;

	constructor() {}
	ngOnInit() {}
}
