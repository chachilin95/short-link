import uuid from 'uuid';

import { State, Action, Link } from '../types/links.types';
import makeURL from '../util/makeURL';

export default (
    state: State = [],
    action: Action): State => {
        switch (action.type) {
            case 'ADD_LINK':
                const newLink: Link = {
                    id: uuid(),
                    to: action.to,
                    url: makeURL(state)
                }
                return [...state, newLink];
            case 'DELETE_LINK':
                return state.filter((link) => link.id !== action.id);
            case 'SET_LINKS':
                return [...action.links];
            default:
                return state;
        }
};