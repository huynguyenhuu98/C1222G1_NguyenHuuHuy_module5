import userService from "../service/userService"
import {GET_ALL_USER,CREATE_USER} from "./types"
export const getAll = () => async (dispatch) => {
    try {
        const res = await userService.findAll();
        dispatch({
            type: GET_ALL_USER,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const res = await userService.save(user);
        dispatch({
            type: CREATE_USER,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}