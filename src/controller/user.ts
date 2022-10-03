import {create_user} from '../application/service/user';
import {User} from '../domain/entity';

export const signUp = ():User => {
    return create_user("grab");
};
