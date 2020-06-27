import axios from 'axios'

const initialState = {
    id: '',
    first_name: '',
    last_name: '',
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'
const STORE_USER = 'STORE_USER'

export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUser(id, first_name, last_name){
    return {
        type: GET_USER,
        payload: {id, first_name, last_name}
    }
}

export function storeUser(id, first_name, last_name){
    return {
        type: STORE_USER,
        payload: {id, first_name, last_name}
    }
}

export default function (state = initialState, action){
    switch (action.type) {
        case LOGIN_USER:
            return {...state, user: action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state ,...action.payload}
        case GET_USER + '_PENDING':
            return state
        case GET_USER + '_FULFILLED':
            return {...state, ...action.payload, isLoggedIn: true}
        case GET_USER + '_REJECTED':
            return initialState
        case STORE_USER:
            return {...state, ...action.payload}
        default:
            return initialState
    }
};