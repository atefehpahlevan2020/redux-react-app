import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CommentFetchRequested,CommentFetchSucceeded,CommentFetchFailed } from './actions/actionTypes';

const getCommentsFromAPI = () => fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())

function* fetchComments(action) {
    try {
       const comments = yield call(getCommentsFromAPI);
       yield put({type: CommentFetchSucceeded, comments:comments});
    } catch (e) {
       yield put({type: CommentFetchFailed, message: e.message});
    }
}


function* mySaga() {
    yield takeEvery(CommentFetchRequested, fetchComments);
}

// function* mySaga() {
//     yield takeLatest(COMMENT_FETCH_REQUESTED, fetchComments);
// }
  
export default mySaga;