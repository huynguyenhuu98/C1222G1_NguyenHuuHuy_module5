import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {ToastContainer} from "react-toastify";

export function UserList() {
    const user = useSelector(state => state.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll())
    }, [])
    return (
        <>
            <h3>User List</h3>
            <NavLink to="/" className="btn btn-outline-success">
                Get users
            </NavLink>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {user.map((user) => (
                    <tr key={user.name}>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            <NavLink to={`/edit/${book.id}`} className="btn btn-outline-primary me-2">
                                Edit
                            </NavLink>

                            <button type="button" className="btn btn-outline-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}