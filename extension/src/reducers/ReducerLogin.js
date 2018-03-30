import { LOGIN } from '../actions/index';

export default function(state=[], action) {
    switch (action.type) {
        case LOGIN:
            console.log('action payload ', action.payload);
            console.log('state ', state);
            return [ action.payload, ...state ];
        default:
            break;
    }

    return state;
}