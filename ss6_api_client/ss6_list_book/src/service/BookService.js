import axios from "axios";

export const findAll  = async () => {
    try {
        const result = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
        return result.data
    } catch (error) {
        console.log(error)
    }
}
export const create  = async (book) => {
    try {
        await axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books',book)
    } catch (error) {
        console.log(error)
    }
}

export const getById = async (id) => {
    try {
        const book = await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`)
        return book.data
    } catch (error) {
        return error
    }
}

export const edit = async (id,book) => {
    try {
        await axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`, book)
    } catch (error) {
        console.log(error);
        return error
    }
}