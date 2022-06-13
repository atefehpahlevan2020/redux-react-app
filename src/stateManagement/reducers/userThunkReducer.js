import {FETCH_USERS_START,FETCH_USERS_SUCC,FETCH_USERS_FAILED} from '../actions/actionTypes';

const initialState = {
    items : [],
    isLoading : true,
    message : '',
};


function userThunkReducer(state = initialState ,action) {
    switch (action.type) {
        case FETCH_USERS_START:
            return {items:[], message:'', isLoading:true}
        case FETCH_USERS_SUCC:
            return {items:action.payload, message:'', isLoading:false}
        case FETCH_USERS_FAILED:
            return {items:[], message:action.payload, isLoading:false}
        default:
            return state;
    }
}

export default userThunkReducer;