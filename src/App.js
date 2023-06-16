import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/styles.css'
import NavBar from "./components/inc/Navbar";
import  Carousel  from "./components/inc/Carousel";
import Content from "./components/inc/Content";
import Footer from "./components/inc/Footer";
import Form from "./components/inc/Form";
function App(){
    return(
<div position="relative">
<NavBar/>
<Carousel/>
    <Content></Content>
<Footer/>
</div>
    );
}

export default App;
