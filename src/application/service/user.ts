import {User} from '../../domain/entity';
import IUserRepository from '../interfaces/userRepository';

export class UserService {
    private _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    async createUser(userName: string): Promise<User> {
        const user: User = new User(userName);
        await this._userRepository.create(user);
        return user;
    }
}


export const create_user = (user_name: string): User => new User(user_name);
