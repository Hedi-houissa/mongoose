import React from "react";
import { Card } from "react-bootstrap";
import "./ContactCard.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteContact, getOne, toogleTrue } from "../../JS/action/contact";

function ContactCard({ contact }) {
  const dispatch = useDispatch();

  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Header>{contact.name}</Card.Header>
      <Card.Body>
        <Card.Title>{contact.age}</Card.Title>
        <Card.Text>{contact.favoritFood}</Card.Text>
      </Card.Body>
      <button onClick={() => dispatch(deleteContact(contact._id))}>
        delete
      </button>
      <Link to={`/editContact/${contact._id}`}>
        <button
          onClick={() => {
            dispatch(toogleTrue());
            dispatch(getOne(contact._id));
          }}
        >
          edit
        </button>
      </Link>
    </Card>
  );
}

export default ContactCard;
