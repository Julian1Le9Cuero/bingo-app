import axios from 'axios'
import { LOGIN_SUCCESS, LOGIN_FAIL } from "./actionsTypes";
import { setAlert } from "./alert";

// Login user
export const login = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const url = 'https://java.bocetos.co/userred-0.0.1-SNAPSHOT/auth'
    try {
        const resp = await axios.post(url, formData, config)

        return dispatch({
            type: LOGIN_SUCCESS,
            payload: resp.data
        })
    } catch (error) {
        console.error(error.message);
        
        dispatch({
            type: LOGIN_FAIL
        })
        return dispatch(setAlert({type: 'danger', msg: error.message}))
    }
}



