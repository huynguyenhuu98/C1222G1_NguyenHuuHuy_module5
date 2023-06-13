import request from "../http-common";

const findAllUser =()=>{
    return request.get('/user')
}
const deleteUser =(id)=>{
    return request.delete(`/user/${id}`)
}
const userService = {
    findAllUser,
    deleteUser
}
export default userService