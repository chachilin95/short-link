import {
    IAuthContext,
    Action as AuthAction,
    State as AuthState
} from './auth.types';

import {
    ILinksContext,
    Action as LinksAction,
    State as LinksState
} from './links.types';

export type State = {
    auth: AuthState,
    links: LinksState
};

export type Action = AuthAction & LinksAction;

export type IAppContext = IAuthContext & ILinksContext;

