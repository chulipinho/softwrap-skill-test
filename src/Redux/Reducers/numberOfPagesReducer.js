const numberOfPagesReducer = (state = 1, action) => {
    switch(action.type){
        case 'changeNumberOfPages':
            return action.payload;
        default: 
            return state;
    }
}

export default numberOfPagesReducer;