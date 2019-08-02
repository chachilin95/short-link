import React from 'react';

import { ILinksContext } from '../types/links.types';

const defaultValue: ILinksContext = {
    links: [],
    dispatch: () => {}
};
export const LinksContext = React.createContext<ILinksContext>(defaultValue);

export const LinksContextProvider = LinksContext.Provider;
export const LinksContextConsumer = LinksContext.Consumer;