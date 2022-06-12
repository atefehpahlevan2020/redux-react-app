//getAll
//getById
//add
//remove
//edit
import {ProductGetAll,ProductGetById,ProductAdd,ProductRemove,ProductEdit} from './actionTypes';

export const getAll = () => ({
    type : ProductGetAll
})

export const getById = id => ({
    type : ProductGetById,
    payload : id
})

export const add = item => ({
    type : ProductAdd,
    payload : item
})

export const remove = id => ({
    type : ProductRemove,
    payload : id
})

export const edit = item => ({
    type : ProductEdit,
    payload : item
})