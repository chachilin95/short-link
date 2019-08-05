import { combineReducers } from 'redux';

import { State } from '../types/app.types';

import authReducer from '../reducers/auth';
import linksReducer from '../reducers/links';

export const reducers = combineReducers({
    auth: authReducer,
    links: linksReducer
});

export const state: State = {
    auth: { uid: '' },
    links: []
};