import React, {useEffect} from 'react';
import './App.css'
import {userSlice} from "./store/reducers/UserSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";

function App() {
    // const {count} = useAppSelector(state => state.userReducer)
    // const {increment} = userSlice.actions

    // const dispatch = useAppDispatch()
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return (
        <div className='App'>
            {/*<h1>{count}</h1>*/}
            {/*<button onClick={() => dispatch(increment(10))}>INCREMENT</button>*/}

            {/*{isLoading && <h1>Loading...</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}
            {/*{JSON.stringify(users, null, 2)}*/}

            <div style={{display: 'flex'}}>
                <PostContainer/>
                <PostContainer2/>
            </div>
        </div>
    );
};

export default App;