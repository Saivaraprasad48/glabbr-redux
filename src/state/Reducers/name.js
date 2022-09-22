const name = (state = "" , action) => {
    if (action.type === "NAMECHANGE") {
        return state = action.payload;
    } else {
        return state;
    }
}

export default name;