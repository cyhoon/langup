const authReducer = (state = null, action) => {
    switch(action.type) {
        case 'AUTH':
            return "hello, world!";
    }

    return state;
}

export default authReducer;