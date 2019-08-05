import React from 'react';

import { IAppContext } from '../types/app.types';

export const defaultValue: IAppContext = {
    state: {
        auth: { uid: '' },
        links: []
    },
    dispatch: () => {}
};
export const AppContext = React.createContext<IAppContext>(defaultValue);

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;