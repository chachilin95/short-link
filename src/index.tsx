import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { StorageItems } from './types/app.types';
import { state as initialState, reducers } from './store/configureStore';
import { AppContextProvider } from './contexts/app';
import { login } from './actions/auth';
import AppRouter from './routers/AppRouter';

const JSX = () => {
    const [state, dispatch] = useReducer(reducers, initialState);

    // initialize state
    useEffect(() => {

        const localUID = localStorage.getItem(StorageItems.UID);
        if (localUID) {
            dispatch(login(localUID));
        }

        const localLinks = localStorage.getItem(StorageItems.LINKS);
        if (localLinks) {
            console.log(localLinks);
        }

    }, []);

    return (
        <AppContextProvider value={{ state, dispatch }}>
            <AppRouter />
        </AppContextProvider>
    );
}

ReactDOM.render(<JSX />, document.getElementById('root'));