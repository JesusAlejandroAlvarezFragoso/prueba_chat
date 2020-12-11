import { User } from '../user/user';

export interface Message {
	id: string;
	user: User;
	body: string;
	date: string;
}

export function is_mine(message_user: User, me: User): boolean {
	return message_user.id == me.id;
}
