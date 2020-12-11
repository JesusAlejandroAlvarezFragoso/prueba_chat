import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { SocketioService } from '../socketio.service';
import { Room } from './room';

@Injectable({
	providedIn: 'root'
})
export class RoomService {
	socket: SocketioService;
	room: Room;

	constructor(
		socket: SocketioService
	){
		this.socket = socket;
	}

	getRoom(code=''): Observable<Room> {
		this.room = {
			id: 'id_r_' + code,
			name: '',
			members_total: 1
		};

		this.socket
			.joinRoom()
			.subscribe((total)=>{
				this.room.members_total = total
			})
		;

		return of(this.room);
	}
}
