import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/actionsTypes";

const initialState = {
    loading: true,
    isAuthenticated: false,
    token: null
}

export default function auth(state=initialState, action) {
    const {type, payload} = action
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.Authorization)
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                token: payload.Authorization
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                token: null
            }
        default:
            return state
    }
}