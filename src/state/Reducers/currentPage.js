const currentPage = (state = 1, action) => {
    if (action.type === "CURRENT_PAGE") {
        return state = action.payload;
    } else {
        return state;
    }
}

export default currentPage;