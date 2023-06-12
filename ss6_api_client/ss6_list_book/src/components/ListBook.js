import React, { useEffect, useState } from "react";
import * as bookService from "../service/BookService";
import { ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";

export function ListBook() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            const result = await bookService.findAll();
            setBooks(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <>
            <h3>Library</h3>
            <NavLink to="/create" className="btn btn-outline-success">
                Add a new book
            </NavLink>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
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
    );
}
