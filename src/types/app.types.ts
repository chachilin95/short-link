import {
    Action as AuthAction,
    State as AuthState
} from './auth.types';

import {
    Action as LinksAction,
    State as LinksState
} from './links.types';

export enum StorageItems {
    UID = 'short-link:uid',
    LINKS = 'short-link:links'
};

export enum RouterPaths {
    LOGIN = '/',
    LINKS = '/links',
    SIGNUP = '/signup'
};

export type State = {
    auth: AuthState,
    links: LinksState
};

export type Action = AuthAction | LinksAction;

export type IAppContext = {
    state: {
        auth: AuthState,
        links: LinksState,
    },
    dispatch: React.Dispatch<Action>
};

