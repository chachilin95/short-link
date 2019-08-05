interface State {
    id: string
};

export default (state: State[]): string => {
    const urlLength = 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    let result = '';
    let isUnique = true;
    do {
        var i = 0;
        isUnique = true;

        // generate url
        for (i = 0; i < urlLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        // determine if url is unique
        for (i = 0; i < state.length; i++) {
            if (state[i].id === result) {
                isUnique = false;
                break;
            }
        }

    } while (!isUnique)

    return result;
}