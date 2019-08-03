import { combineReducers } from 'redux';

// reducers
import authReducer from '../reducers/auth';
import linksReducer from '../reducers/links';

export const combinedReducer = combineReducers({
    auth: authReducer,
    links: linksReducer
});

export type AppState = ReturnType<typeof combinedReducer>;