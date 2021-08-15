import { SET_ALERT, REMOVE_ALERT } from "./actionsTypes";
import { uuid } from "uuidv4";

export const setAlert = (type, msg, timeout=3000) => dispatch => {
    const alert = {
        id: uuid(),
        type,
        msg
    }

    dispatch({
        type: SET_ALERT,
        payload: alert
    })

    return setTimeout(() => {
        return dispatch({
            type: REMOVE_ALERT,
            payload: alert
        })
    }, timeout)
}