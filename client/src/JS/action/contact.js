import axios from "axios";
import {
    ADD_CONTACT_FAIL,
    ADD_CONTACT_SUCC,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCC,
  EDIT_FALSE,
  EDIT_SUCC,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCC,
  GET_ONECONTACT_FAIL,
  GET_ONECONTACT_LOAD,
  GET_ONECONTACT_SUCC,
  TOOGLE_FALSE,
  TOOGLE_TRUE,
} from "../actionType/contact";



// get all person 
export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOAD });
  try {
    let result = await axios.get("/persons/"); //http://localhost:7000/persons/
    console.log("resultat ", result);
    dispatch({ type: GET_CONTACT_SUCC, payload: result.data.allPerson });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_CONTACT_FAIL, payload: error.response.data });
  }
};

//delete contact 
export const deleteContact = (contactId) => async (dispatch) => {
  try {
    await axios.delete(`/persons/${contactId}`)
    dispatch({type:DELETE_CONTACT_SUCC})
    dispatch(getContacts())
  } catch (error) {
      dispatch({type:DELETE_CONTACT_FAIL,payload : error.response.data})
  }
};


// add new person 
export const addContact =  (newContact)=>async (dispatch) =>{
    try {
        await axios.post('/persons/',newContact)
        dispatch({type:ADD_CONTACT_SUCC})
        dispatch(getContacts())
    } catch (error) {
        dispatch({type:ADD_CONTACT_FAIL,payload:error.response.data})
    }
}

//toogle true
export const toogleTrue = ()=>{
  return {
    type : TOOGLE_TRUE
  }
}
//toogle false
export const toogleFalse = ()=>{
  return {
    type : TOOGLE_FALSE
  }
}


// get one by id
export const getOne = (contactId) => async(dispatch)=>{
  dispatch ({type:GET_ONECONTACT_LOAD})
  try {
    let result = await axios.get(`/persons/${contactId}`)
    dispatch({type:GET_ONECONTACT_SUCC,payload:result.data.persontofind})

  } catch (error) {
    dispatch({type:GET_ONECONTACT_FAIL,payload:error.response.data})
  }
}


// edit person 
export const editContact = (contactId, newContact) => async(dispatch)=>{
  try {
    await axios.put(`/persons/${contactId}`,newContact) 
    dispatch({type:EDIT_SUCC})
    dispatch(getContacts)
    
  } catch (error) {
    dispatch({type:EDIT_FALSE, payload:error.response.data })
  }
}

