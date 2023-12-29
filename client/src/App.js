import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/styles.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/homePage/Home'
import SignUp from './components/pages/loginPage/Form'
import Alumni from './components/pages/alumniPage/alumni'
import Contact from './components/pages/teamPage/contactUs'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login-signup" element={<SignUp/>}></Route>
            <Route path="/alumni" element={<Alumni/>}></Route>    
        </Routes>
    );
}

export default App;