import { IS_MAIN, SEARCH, isMain } from '../actions/index';

const initialState = {
    mainContainer: false
}

export default function(state=initialState, action) {
    console.log('Reducer Main입니다.');
    switch (action.type) {
        case SEARCH:
            console.log('redce search excute');
            return isMain(true).payload; // Content visible true
        default:
            console.log(`action type은 ${action.type} 입니다.`);
            break;
    }

    return state;
}