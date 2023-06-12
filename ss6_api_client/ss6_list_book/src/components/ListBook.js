import React, { useEffect, useState } from "react";
import * as bookService from "../service/BookService";
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";

export function ListBook() {
    const [books, setBooks] = useState([]);
    const [deleteId, setDeleteId] = useState(null);

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

    const handleDelete = async () => {
        try {
            await bookService.deleteBook(deleteId);
            toast.success("Xóa thành công");
            setDeleteId(null);
            fetchBooks();
        } catch (error) {
            toast.error("Xóa thất bại");
            console.error(error);
        }
    };

    const handleId = (id) => {
        setDeleteId(id);
    };

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

                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                data-toggle="modal"
                                data-target="#modelId"
                                onClick={() => handleId(book.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete book</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">Do you want to delete?</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

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
