import React from 'react';
import './stylesheets/styles.css';
import signup_form from './alumni_signup';
function Navbar(){
   return(
    <div className="nav">
     <img className="logo" src="src/image.jpg"></img>
        <div className="nav-bar">
            <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Alumni</li>
                    <li className="nav-item">Opportunities</li>
                    <li className="nav-item">News/Events</li>
                    <li className="nav-item">Contact Us</li>
            </ul>
             <div className="login-signup" onClick={<signup_form></signup_form>}></div>
         </div>
     </div>
   );
}

export default Navbar
