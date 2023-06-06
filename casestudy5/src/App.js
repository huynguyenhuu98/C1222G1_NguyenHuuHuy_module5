import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './view/Header';
import Footer from './view/Footer';
import Content from "./view/Content";

function App() {
    return (
        <>
            <Header/>
            <Content/>
            <Footer/>
        </>
    );
}

export default App;
