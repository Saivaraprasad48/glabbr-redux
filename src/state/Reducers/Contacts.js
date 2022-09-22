import Data from "../../components/Contacts/Contacts.json"

const Contacts = (state = Data, action) => {
    if (action.type === "FILTER") {
        return state = action.payload;
    } else if (action.type === "FAV"){
        return state = action.payload;
    } else if (action.type === "ADDCONTACT"){
        return state = [...Data,action.payload];
    } else {
        return state;
    }
}

export default Contacts;