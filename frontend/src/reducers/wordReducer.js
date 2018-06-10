import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    myBook: {
        status: 'INIT',
        message: '조회 완료',
        list: [],
    },
};

const wordReducer = (state, action) => {
    if (typeof state === "undefined") {
        state = initialState;
    }

    switch (action.type) {
        case types.MY_WORD_BOOK_LIST_SUCCESS:
            return update(state, {
                myBook: {
                    status: { $set: 'SUCCESS' },
                    list: { $set: action.list },
                }
            });
        case types.MY_WORD_BOOK_LIST_FAILURE:
            return update(state, {
                myBook: {
                    status: { $set: 'FAILURE' },
                    message: { $set: action.message },
                }
            });
        default:
            return state;
    }
};

export default wordReducer;