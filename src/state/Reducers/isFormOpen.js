const isFormOpen = (state = false, action) => {
    if (action.type === "FORMOPEN") {
        return state = true;
    } else if(action.type === "FORMCLOSE") {
        return state = false;
    } else {
        return state;
    }
}

export default isFormOpen;