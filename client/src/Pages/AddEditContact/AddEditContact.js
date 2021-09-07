import React, { useState , useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addContact, editContact } from "../../JS/action/contact";
import { Link } from "react-router-dom";

import "./AddEdit.css";

function AddEditContact() {

  const [contact, setcontact] = useState({
    name: "",
    favoritFood: [],
    age: null,
  });

  const edit = useSelector(state => state.contactReducer.edit)
  const contactRed = useSelector(state => state.contactReducer.contact)

  const dispatch = useDispatch();

  useEffect(() => {
    edit ? setcontact(contactRed) : setcontact({name:"",favoritFood:[],age:""})
    
  }, [edit , contactRed])

  const handlChange = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <div className="stylediv">
      <Form className="styleform">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={contact.name}
            onChange={handlChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Food</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter food"
            name="favoritFood"
            value={contact.favoritFood}
            onChange={handlChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>age</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter age"
            name="age"
            value={contact.age}
            onChange={handlChange}
          />
        </Form.Group>
        {edit ? (
          <Link to="/">
            <Button
              variant="primary"
              type="submit"
              onClick={() => dispatch(editContact(contact._id,contact))}
            >
              Edit
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button
              variant="primary"
              type="submit"
              onClick={() => dispatch(addContact(contact))}
            >
              Add
            </Button>
          </Link>
        )}
      </Form>
    </div>
  );
}

export default AddEditContact;
