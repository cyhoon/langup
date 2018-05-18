const auth = (state = null, action) => {
    switch(action.type) {
        case 'AUTH':
            return action.payload;
    }

    return state;
}

export default auth;