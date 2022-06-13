import {FETCH_USERS_START,FETCH_USERS_SUCC,FETCH_USERS_FAILED} from './actionTypes';


export function getAllUsers(dispatch) {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    dispatch(fetchUsersStart());
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        dispatch(fetchUsersSucc(data));
    })
    .catch(error => {
        dispatch(fetchUsersFailed(error))
    })
}


export const fetchUsersStart = () => ({
    type : FETCH_USERS_START
})

export const fetchUsersSucc = (data) => ({
    type : FETCH_USERS_SUCC,
    payload : data
})

export const fetchUsersFailed = (errorMessage) => ({
    type : FETCH_USERS_FAILED,
    payload : errorMessage
})