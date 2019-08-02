import { Action, UID } from '../types/auth.types';

export const login = (uid: UID): Action => ({
    type: 'LOGIN',
    uid
});

export const logout = (): Action => ({
    type: 'LOGOUT'
});