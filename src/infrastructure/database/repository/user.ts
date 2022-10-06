import IUserRepository from '../../../application/interfaces/userRepository';
import {User} from '../../../domain/entity';
import {JsonDatabase} from '../datasource/jsonDatabase';

export class UserRepository implements IUserRepository {
    private _database: JsonDatabase;

    constructor(database: JsonDatabase) {
        this._database = database;
    }

    async create(user: User): Promise<boolean> {
        const db = await this._database.openDB();
        db.users.push(user);
        await this._database.saveDB(db);

        return true;
    }
}
