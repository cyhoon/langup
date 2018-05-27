const authReducer = (state = null, action) => {
    switch(action.type) {
        case 'AUTH':
            return "hello, world!";
        default:
            return state;
    }
}

export default authReducer;