import userService from '../../service/ListService';
import {DELETE_USER, FIND_ALL_USERS, SHOW_USER} from './types';

export const findAllUsers = () => async (dispatch) => {
    try {
        const res = await userService.findAllUser();
        dispatch({
            type: FIND_ALL_USERS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteUser = (id) => async (dispatch) => {
    try {
        const res = await userService.deleteUser(id);
        console.log(res)
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}
export const showUser = () => (dispatch) => {
    dispatch({
        type: SHOW_USER
    })

}