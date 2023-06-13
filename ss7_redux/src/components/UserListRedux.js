import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, findAllUsers, showUser } from "../redux/action/users";

export function UserListRedux() {
    const users = useSelector(state => state.users)
    const showUsers = useSelector(state => state.show)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsers())
    }, [])
    let count=1
    return (
        <>
            <h2>Users List</h2>
            <button className='btn btn-outline-primary' onClick={()=>dispatch(showUser())}>Get User</button>
            { showUsers &&
            <table className="table border-1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td scope="row">{count++}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>
                                <button className='btn btn-outline-danger' type="button" onClick={()=>dispatch(deleteUser(user.id))}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            }
        </>
    )
}