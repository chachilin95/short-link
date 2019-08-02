export type UID = string;

export type State = UID;

export type Action = 
    | {
        type: 'LOGIN'
        uid: UID
    }
    | {
        type: 'LOGOUT'
    };

export type IAuthContext = {
    uid: UID,
    dispatch: React.Dispatch<Action>
};