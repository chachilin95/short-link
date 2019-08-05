import { Action, UID } from '../types/auth.types';
import { StorageItems } from '../types/app.types';

export const login = (uid: UID): Action => ({
    type: 'LOGIN',
    uid
});

export const startLogin = (uid: UID): Action => {
    localStorage.setItem(StorageItems.UID, uid);
    return login(uid);
};

export const logout = (): Action => ({
    type: 'LOGOUT'
});

export const startLogout = (): Action => {
    localStorage.setItem(StorageItems.UID, '');
    return logout();
};