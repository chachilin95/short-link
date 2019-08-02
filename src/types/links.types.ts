export type Link = {
    id: string,
    to: string,
    url: string
};

export type State = Link[];

export type Action =
    | {
        type: 'ADD_LINK',
        to: string
    }
    | {
        type: 'DELETE_LINK',
        id: string
    };

export type ILinksContext = {
    links: Link[],
    dispatch: React.Dispatch<Action>
};