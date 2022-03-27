const recordsPerPageReducer = (state = 5, action) => {
    switch(action.type){
        case 'changeRecordsPerPage':
            return action.payload;
        default: 
            return state;
    }
}

export default recordsPerPageReducer;