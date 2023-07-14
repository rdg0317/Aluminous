import React from "react";
import Card from "./card";
import contact from './contacts';

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            fname={contact.fname}
            lname={contact.lname}
            programme={contact.programme}
            department={contact.department}
            batch={contact.batch}
            linkedIn={contact.linkedIn}
            email={contact.email}
        />
    )
}

export default createCard;