import {
  ADD_CONTACT_FAIL,
  DELETE_CONTACT_FAIL,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCC,
  TOOGLE_FALSE,
  TOOGLE_TRUE,
  GET_ONECONTACT_FAIL,
  GET_ONECONTACT_SUCC,
  GET_ONECONTACT_LOAD,
  EDIT_FALSE,
} from "../actionType/contact";

const initState = {
  listContacts: [],
  load: false,
  errors: null,
  edit: false,
  contact: {},
  msg:""
};

export const contactReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT_LOAD:
      return { ...state, load: true };
    case GET_CONTACT_SUCC:
      return { ...state, load: true, listContacts: payload };
    case GET_CONTACT_FAIL:
      return { ...state, load: false, errors: payload };

    case DELETE_CONTACT_FAIL:
      return { ...state, errors: payload };

    case ADD_CONTACT_FAIL:
      return { ...state, errors: payload };

    case TOOGLE_TRUE:
      return { ...state, edit: true };
    case TOOGLE_FALSE:
      return { ...state, edit: false };

    case GET_ONECONTACT_LOAD:
      return { ...state, load: true };
    case GET_ONECONTACT_SUCC:
      return { ...state, load: true, contact: payload };
    case GET_ONECONTACT_FAIL:
      return { ...state, load: true, errors: payload };

      case EDIT_FALSE : return {...state,msg:payload.msg}


    default:
      return state;
  }
};

export default contactReducer;
