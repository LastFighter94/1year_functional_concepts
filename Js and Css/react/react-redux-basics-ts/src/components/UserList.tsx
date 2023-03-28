import React, {FC, useEffect} from 'react';
import {useTypesSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: FC = () => {
    const {users, error, loading} = useTypesSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        // @ts-ignore
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;