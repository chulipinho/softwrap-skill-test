import { useState, useEffect } from "react";
import { onValue } from "firebase/database";
import Database from "../Singletons/database";

export default function useUsers() {
    const [users, setUsers] = useState('loading');
    const database = Database.getInstance();

    useEffect(() => {
        onValue(database.usersPath, snapshot => {
            setUsers(snapshot.val());
            console.log(snapshot.val())
        })
    }, [database]);

    return users;
}