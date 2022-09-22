const status = (state = "" , action) => {
    if (action.type === "STATUSCHANGE") {
        return state = action.payload;
    } else {
        return state;
    }
}

export default status;