import axios from "axios";
import {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  addNewContactsRequest,
  addNewContactsSuccess,
  addNewContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from "./contacts.actions";

axios.defaults.baseURL = "http://localhost:3001/";

const addNewContacts = (contact) => async (dispatch, _) => {
  dispatch(addNewContactsRequest());
  try {
    const { data } = await axios.post("contacts", contact);
    dispatch(addNewContactsSuccess(data));
  } catch (error) {
    dispatch(addNewContactsError(error));
  }
};

const getAllContacts = () => async (dispatch) => {
  dispatch(getAllContactsRequest());
  try {
    const { data } = await axios.get("contacts");
    dispatch(getAllContactsSuccess(data));
  } catch (error) {
    dispatch(getAllContactsError(error));
  }
};

const removeContacts = (id) => async (dispatch) => {
  dispatch(removeContactsRequest());
  try {
    await axios.delete(`contacts/${id}`);
    dispatch(removeContactsSuccess(id));
  } catch (error) {
    dispatch(removeContactsError(error));
  }
};

export { addNewContacts, getAllContacts, removeContacts };
