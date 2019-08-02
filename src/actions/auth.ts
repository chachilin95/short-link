import { Action } from '../types/auth.types';

export const login = (uid: string): Action => ({
    type: 'LOGIN',
    uid
});

export const logout = (): Action => ({
    type: 'LOGOUT'
});