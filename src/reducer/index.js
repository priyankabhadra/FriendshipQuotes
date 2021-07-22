const rootReducer = (state={}, action) => {
    switch(action.type) {
        case "submitData": {
            state = action.payload;
            return state;
        }
        default: {
            return {...state};
        }
    }
}

export default rootReducer;