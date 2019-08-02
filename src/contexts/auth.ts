import React from 'react';

import { IAuthContext } from '../types/auth.types';

const defaultValue: IAuthContext = {
    uid: '',
    dispatch: () => {}
};
export const AuthContext = React.createContext<IAuthContext>(defaultValue);

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;