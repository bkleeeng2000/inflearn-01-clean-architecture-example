import {User} from '../../domain/entity';

interface IUserRepository {
    create(user: User): Promise<boolean>;
}

export default IUserRepository;
