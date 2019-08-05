import React, { useContext } from 'react';

import { AppContext } from '../contexts/app';
import { startLogout } from '../actions/auth';

export default () => {
    const { dispatch } = useContext(AppContext);

    const handleLogout = () => dispatch(startLogout());

    return (
        <div>
            <h1>Your Links</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};