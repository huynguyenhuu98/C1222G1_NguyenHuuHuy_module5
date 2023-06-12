import axios from "axios";

export const findAll  = async () => {
    try {
        const result = await axios.get('http://localhost:8080/books')
        return result.data
    } catch (error) {
        console.log(error)
    }
}
export const create  = async (book) => {
    try {
        await axios.post('http://localhost:8080/books',book)
    } catch (error) {
        console.log(error)
    }
}

export const getById = async (id) => {
    try {
        const book = await axios.get('http://localhost:8080/books/'+id)
        return book.data
    } catch (error) {
        return error
    }
}

export const edit = async (id,book) => {
    try {
        await axios.post('https://localhost:8080/books/'+id, book)
    } catch (error) {
        console.log(error);
        return error
    }
}