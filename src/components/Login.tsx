import React, { useContext } from 'react';

import { AppContext } from '../contexts/app';
import { startLogin } from '../actions/auth';

export default () => {
    const { dispatch } = useContext(AppContext);

    const handleLogin = () => dispatch(startLogin('afigueroa')); // TODO: need legit uid

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};