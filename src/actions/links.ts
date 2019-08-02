import { Action } from '../types/links.types';

export const addLink = (to: string): Action => ({
    type: 'ADD_LINK',
    to
});

export const deleteLink = (id: string): Action => ({
    type: 'DELETE_LINK',
    id
});