import jsonfile from 'jsonfile';
import {User} from '../../../domain/entity';

interface IDB {
    users: User[];
}

export class JsonDatabase {
    private dbFilePath = 'database.json';

    async openDB(): Promise<IDB> {
        return jsonfile.readFile(this.dbFilePath);
    }

    async saveDB(db: IDB): Promise<void> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}
