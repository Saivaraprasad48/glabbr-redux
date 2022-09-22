import { combineReducers } from "redux"
import Contacts from "./Contacts"
import errorMsg from "./errorMsg";
import isFormOpen from "./isFormOpen";
import currentPage from "./currentPage";
import location from "./location";
import name from "./name";
import postPerPage from "./postPerPage";
import searchValue from "./searchValue";
import status from "./status";
import formsuccess from "./formsuccess";

const reducers = combineReducers({
    Contacts: Contacts,
    currentPage: currentPage,
    errorMsg: errorMsg,
    isFormOpen: isFormOpen,
    location: location,
    name: name,
    postPerPage: postPerPage,
    searchValue: searchValue,
    status: status,
    formsuccess: formsuccess
})

export default reducers;