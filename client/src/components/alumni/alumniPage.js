import React from "react";
import Contacts from "./contacts";
import CreateCard from "./createCard";

function alumniPage() {
    return (
        <div>
            <h1>Alumni Page</h1>
            {Contacts.map(CreateCard)}
        </div>
    );
}

export default alumniPage;