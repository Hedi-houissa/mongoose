import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../JS/action/contact";
import ContactCard from "../../Component/ContactCard/ContactCard";
import "./Contactlist.css";

const Contactlist = () => {
  const listContacts = useSelector(
    (state) => state.contactReducer.listContacts
  );
  const load = useSelector((state) => state.contactReducer.load);
  const msg = useSelector(state => state.contactReducer.msg)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  console.log(listContacts);

  return  (
   

      !load ? <h2> wait</h2> :
      
    <div className="style">
      {msg && alert(msg)}
      {listContacts.map((contact) => (
        <ContactCard contact={contact} key={contact._id} />
      ))}
    </div>
  );
};

export default Contactlist;
