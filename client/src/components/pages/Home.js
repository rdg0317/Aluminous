import NavBar from "./components/inc/Navbar";
import  Carousel  from "./components/inc/Carousel";
import Content from "./components/inc/Content";
import Footer from "./components/inc/Footer";

function Home(){
    return(
<div position="relative">
<NavBar/>
<Carousel/>
<Content></Content>
<Footer/>
</div>
    );
}

export default Home;