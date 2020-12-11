import { User, get_random_name } from './user';

function get_default_user(): User {
	return {
		id: 'id_' + get_random_name(),
		name: 'Persona ' + get_random_name()
	};
}

export const USER: User = get_default_user();
