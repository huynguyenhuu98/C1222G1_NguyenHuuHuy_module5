import logo from './logo.svg';
import './App.css';
import React from "react";
import {ToDoList} from "./components/ToDoList";
import {ToDoTask} from "./components/ToDoTask";

function App() {
    return (
        <>
            <ToDoTask/>
            <ToDoList/>
        </>
    );
}

export default App;
