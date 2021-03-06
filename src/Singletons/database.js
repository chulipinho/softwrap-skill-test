import firebaseApp from "../Utils/firebase";
import { getDatabase, ref, push, get, child, remove, update } from "firebase/database";


class DatabaseClass {
    constructor() {
        this.database = getDatabase(firebaseApp);
        this.dbRef = ref(this.database);
        this.mainPath = 'users';
    }

    get usersPath() {
        return ref(this.database, this.mainPath);
    }

    createEntry(entry) {
        push(ref(this.database, this.mainPath), entry);
        return entry;
    }
    async readEntries() {
        let entries = await get(child(this.dbRef, this.mainPath)).then(snapshot => snapshot.val());

        return entries;
    }
    deleteEntry(key) {
        let itemPath = `${this.mainPath}/${key}`;
        remove(ref(this.database, itemPath));
    }
    updateEntry(key, updates) {
        let itemPath = `${this.mainPath}/${key}`;
        update(ref(this.database, itemPath), updates);
    }

}

var Database = (function () {
    var instance;

    function createInstance() {
        var object = new DatabaseClass();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Database;