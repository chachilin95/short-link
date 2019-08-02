export type uid = string;

export type State = uid;

export type Action = 
    | {
        type: 'LOGIN'
        uid: uid
    }
    | {
        type: 'LOGOUT'
    };

export type IAuthContext = {
    uid: string,
    dispatch: React.Dispatch<Action>
};