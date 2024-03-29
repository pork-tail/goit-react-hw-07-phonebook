import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addNewContactsRequest,
  addNewContactsSuccess,
  addNewContactsError,
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  filterChange,
} from "./contacts.actions";

const loading = createReducer(false, {
  [getAllContactsRequest]: () => true,
  [getAllContactsSuccess]: () => false,
  [getAllContactsError]: () => false,
  [addNewContactsRequest]: () => true,
  [addNewContactsSuccess]: () => false,
  [addNewContactsError]: () => false,
  [removeContactsRequest]: () => true,
  [removeContactsSuccess]: () => false,
  [removeContactsError]: () => false,
});

const items = createReducer([], {
  [getAllContactsSuccess]: (_, action) => action.payload,
  [addNewContactsSuccess]: (state, action) => [action.payload, ...state],
  [removeContactsSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const filter = createReducer("", {
  [filterChange]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
  loading,
});

export default contactsReducer;
