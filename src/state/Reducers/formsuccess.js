const formsuccess = (state = false, action) => {
    if (action.type === "FORMSUCCESS") {
        return state = true
    } else {
        return state;
    }
}

export default formsuccess;