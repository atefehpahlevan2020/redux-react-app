import {ProductGetAll,ProductGetById,ProductAdd,ProductRemove} from '../actions/actionTypes';

const initialState = {
    items : [
        {id:1, productName:'Product A', price:100},
        {id:2, productName:'Product B', price:200},
        {id:3, productName:'Product C', price:300},
    ],
    isLoading : true
};


function productReducer(state = initialState ,action) {
    switch (action.type) {
        case ProductGetAll:
            return {...state, items:state.items};
        case ProductGetById:
            return {...state, items:state.items.find((q) => q.id === action.payload)};
        case ProductAdd:
            return {...state, items:state.items.concat([action.payload])};
        case ProductRemove:
            return {...state, items:state.items.filter((q) => q.id !== action.payload)};
        default:
            return state;
    }
}

export default productReducer;