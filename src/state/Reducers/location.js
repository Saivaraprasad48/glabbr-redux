const location = (state = "" , action) => {
    if (action.type === "LOCATIONCHANGE") {
        return state = action.payload;
    } else {
        return state;
    }
}

export default location;