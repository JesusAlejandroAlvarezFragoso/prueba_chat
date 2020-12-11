import { User } from '../user/user';

export interface Room {
	id: string;
	name: string;
	//members: User[];
	members_total: number;
}
