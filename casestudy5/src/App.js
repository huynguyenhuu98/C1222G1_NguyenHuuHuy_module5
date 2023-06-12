import './App.css';
import React from "react";
import {Home} from "./view/Home";
import {CreateRoom} from "./view/CreateRoom";
import {UpdateRoom} from "./view/UpdateRoom";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/create" element={<CreateRoom/>}/>
                {/*<Route path="/update/:id" element={<UpdateRoom/>}/>*/}
            </Routes>

        </>
    );
}

export default App;
