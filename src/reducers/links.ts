import uuid from 'uuid';

import { State, Action, Link } from '../types/links.types';

export const makeURL = (state: State): string => {
    const urlLength = 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    let result = '';
    let isUnique = true;
    do {
        isUnique = true;

        // generate url
        for (var i = 0; i < urlLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        // determine if url is unique
        for (var i = 0; i < state.length; i++) {
            if (state[i].id === result) {
                isUnique = false;
                break;
            }
        }

    } while (!isUnique)

    return result;
}

export default (
    state: State = [],
    action: Action | any): State => {
        switch (action.type) {
            case 'ADD_LINK':
                const newLink: Link = {
                    id: uuid(),
                    to: action.to,
                    url: makeURL(state)
                }
                return [...state, newLink];
            case 'DELETE_LINK':
                return state.filter((link) => link.id != action.id);
            default:
                return state;
        }
};