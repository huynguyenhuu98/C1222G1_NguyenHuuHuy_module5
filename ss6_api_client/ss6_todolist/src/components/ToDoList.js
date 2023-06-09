import React, {useEffect, useState} from "react";
import * as toDoListService from "../service/ToDoListService"
import 'react-toastify/dist/ReactToastify.css';

export function ToDoList() {
    const [toDo, setToDo] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await toDoListService.findAll();
            setToDo(result)
        }
        fetchApi()
    }, [])
    return (
        <>
            {
                toDo.map((item) => (
                    <ul key={item.id}>
                        <li>UserID: {item.userId}</li>
                        <li>ID: {item.id}</li>
                        <li>Title: {item.title}</li>
                        <li>Completed: {item.completed ? "True" : "False"}</li>
                    </ul>
                ))
            }
        </>
    )
}