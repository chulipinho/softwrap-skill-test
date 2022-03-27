export const changePage = (newPage) => {
    return (dispatch) => {
        dispatch({
            type: 'changePage',
            payload: newPage
        });
    }
};

export const changeRecordsPerPage = (value) => {
    return (dispatch) => {
        dispatch({
            type: 'changeRecordsPerPage',
            payload: value
        });
    }
};

export const changeNumberOfPages = (value) => {
    return (dispatch) => {
        dispatch({
            type: 'changeNumberOfPages',
            payload: value
        });
    }
}