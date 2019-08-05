import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router';

import { RouterPaths } from '../types/app.types';
import { AppContext } from '../contexts/app';

export default ({ component: Component, ...rest }: any) => {
    const { state } = useContext(AppContext);
    const isAuthenticated = !!state.auth.uid;

    return (
        <Route {...rest} component={(props: {}) => (
            isAuthenticated ? (
                <Redirect to={RouterPaths.LINKS} />
            ) : (
                <Component {...props} />
            )
        )} />
    );
};