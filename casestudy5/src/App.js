import './App.css';
import React from "react";
import {Home} from "./view/Home";
import {CreateFacilities} from "./view/CreateFacilities";
import {UpdateFacilities} from "./view/UpdateFacilities";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/create" element={<CreateFacilities/>}/>
                {/*<Route path="/update/:id" element={<UpdateFacilities/>}/>*/}
            </Routes>

        </>
    );
}

export default App;
