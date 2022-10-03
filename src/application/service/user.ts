import {User} from '../../domain/entity';


export const create_user = (user_name: string): User => new User(user_name);
