import {UserService} from '../application/service/user';
import {User} from '../domain/entity';
import {UserRepository} from '../infrastructure/database/repository/user';
import {JsonDatabase} from '../infrastructure/database/datasource/jsonDatabase';

export const signUp = async (): Promise<User> => {
    let userService = new UserService(new UserRepository(new JsonDatabase()));
    return userService.createUser('grab');
};
