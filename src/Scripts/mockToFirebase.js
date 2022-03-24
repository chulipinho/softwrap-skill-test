import firebaseApp from "../Utils/firebase.js";
import { getDatabase, ref, push } from "firebase/database";

const mock = require("../Utils/mock.json");

const database = getDatabase(firebaseApp);

export const dbsync = () => {
    mock.map(e => push(ref(database, 'users'), e));
};