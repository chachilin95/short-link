import { State, Action } from '../types/auth.types';

const defaultState: State = {
    uid: ''
}

export default (
    state: State = defaultState, 
    action: Action): State => {
        switch (action.type) {
            case 'LOGIN':
                return { uid: action.uid };
            case 'LOGOUT':
                return { uid: '' };
            default:
                return state;
        }
};