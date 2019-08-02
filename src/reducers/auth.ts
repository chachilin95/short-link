import { State, Action } from '../types/auth.types';

export default (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOGIN':
            return action.uid;
        case 'LOGOUT':
            return '';
        default:
            return state;
    }
};