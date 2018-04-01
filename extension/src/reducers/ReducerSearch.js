import { SEARCH } from '../actions/index';

const initialState = { // 이렇게 초기화 할 수 도 있음
    means: []
};

export default function(state=initialState, action) {
    switch (action.type) {
        case SEARCH:
            console.log('reducer 실행');
            return action.payload;
        default:
            break;
    }

    return state;
}
