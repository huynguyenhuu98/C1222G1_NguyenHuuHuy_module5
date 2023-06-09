import React, {useEffect, useState} from "react";
import * as bookService from "../service/BookService"

export function ListBook() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findAll();
            setBook(result)
        }
        fetchApi()
    }, [])
    return (
        <>
            <div className='row'>
                <div className='col-4'>
                    <h3>Library</h3>
                </div>
                {/*<div className='col-8 '>*/}
                {/*    <button className='btn btn-outline-success' style={{marginLeft:'58rem'}}>Add a new book</button>*/}
                {/*</div>*/}

            </div>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    book.map((items) => (
                        <tr key={items.id}>
                            <td>{items.title}</td>
                            <td>{items.quantity}</td>
                            <td>
                                <button className='btn btn-outline-primary me-2'>Edit</button>
                                <button className='btn btn-outline-danger'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}