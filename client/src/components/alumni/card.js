import React from "react";

function Card(props){
    return(
        <div> 
            <div style={{backgroundColor:"blue"}}>
                {props.fname + " " + props.lname}
            </div>
            <div style={{backgroundColor:"whitesmoke"}}>
                {props.programme+" "+props.department+" "+props.batch}
            </div>
        </div>
    );

}

export default Card;