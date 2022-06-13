import { CommentFetchRequested,CommentFetchSucceeded,CommentFetchFailed } from './actionTypes';

export const commentFetchRequested = () => ({
    type : CommentFetchRequested
})

export const commentFetchSucceeded = () => ({
    type : CommentFetchSucceeded
})

export const commentFetchFailed = () => ({
    type : CommentFetchFailed
})