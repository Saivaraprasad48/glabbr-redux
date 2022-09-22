const errorMsg = (state = false, action) => {
    if (action.type === "ERROR") {
        return state = true
    } else if (action.type === "ERRORCLOSE"){
        return state = false;
    } else {
        return state;
    }
}

export default errorMsg;