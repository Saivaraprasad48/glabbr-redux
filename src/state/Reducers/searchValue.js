const searchValue = (state = "", action) => {
    if (action.type === "SEARCH") {
        return state = action.payload;
    } else {
        return state;
    }
}

export default searchValue;