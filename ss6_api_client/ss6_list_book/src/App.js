import './App.css';
import {ListBook} from "./components/ListBook";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {CreateBook} from "./components/CreateBook";
import {UpdateBook} from "./components/UpdateBook";

function App() {
    return (
        <>
            {/*<NavLink to='/'>List </NavLink>*/}
            {/*<NavLink to='/create'>Add a new book</NavLink>*/}
            <Routes>
                <Route path='/' element={<ListBook/>}/>
                <Route path='/create' element={<CreateBook/>}/>
                <Route path='/edit/:id' element={<UpdateBook/>}/>
            </Routes>
        </>
    );
}

export default App;
