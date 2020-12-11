import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { USER } from './mock-user';
import { User } from './user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	user: User;

	constructor() {}

	getUser(): Observable<User> {
		this.user = USER;

		return of(this.user);
	}
}
