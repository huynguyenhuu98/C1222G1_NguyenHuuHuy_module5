import './App.css';
import {ListBook} from "./components/ListBook";
import React from "react";
import {NavLink,Route, Routes} from "react-router-dom";
import {CreateBook} from "./components/CreateBook";

function App() {
    return (
        <>
            <NavLink to='/'>List</NavLink>
            {/*<NavLink to='/'>Add a new book</NavLink>*/}
            <Routes>
                <Route path='/' element={<ListBook/>}/>
                {/*<Route path='/create' element={<CreateBook/>}/>*/}
            </Routes>
            <ListBook/>
        </>
    );
}

export default App;
