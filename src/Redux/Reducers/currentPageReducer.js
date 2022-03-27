const currentPageReducer = (state = 1, action) => {
    switch (action.type) {
        case "changePage":
            return action.payload;
        default:
            return state;
    }
};

export default currentPageReducer;