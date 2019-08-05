import { Action, Link } from '../types/links.types';
import { StorageItems } from '../types/app.types';

import LinksReducer from '../reducers/links'; // TODO: This is temporary while app is using localStorage

export const addLink = (to: string): Action => ({
    type: 'ADD_LINK',
    to
});

export const startAddLink = (to: string) => {
    let prevState = [];
    const data = localStorage.getItem(StorageItems.LINKS);
    if (data) {
        prevState = JSON.parse(data);
    }

    const newState = LinksReducer(prevState, addLink(to)); // TODO: This is temporary while app is using localStorage

    localStorage.setItem(StorageItems.LINKS, JSON.stringify(newState));
};

export const deleteLink = (id: string): Action => ({
    type: 'DELETE_LINK',
    id
});

export const setLinks = (links: Link[]): Action => ({
    type: 'SET_LINKS',
    links
});