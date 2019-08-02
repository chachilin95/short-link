import uuid from 'uuid';

import { State, Action, Link } from '../types/links.types';


const makeURL = (state: State): string => {    
    const urlLength = 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    let result = '';
    let isUnique = true;

    do {

        // generate url
        for (var i = 0; i < urlLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        // determine if url is unique
        state.forEach((link) => {
            if (link.url === result) {
                isUnique = false;
            }
        });

    } while (isUnique)

    return result;
}

export default (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_LINK':
            const newLink: Link = {
                id: uuid(),
                to: action.to,
                url: makeURL(state)
            }
            return [...state, newLink];
        case 'DELETE_LINK':
            return state.filter((link) => {
                return link.id != action.id;
            });
        default:
            return state;
    }
};