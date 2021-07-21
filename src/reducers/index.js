import initialState from "../mockData";

export const myReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'DeleteData': {
           let newBookDetails = state.bookDetails.filter((value) => value.bookId !== action.payload);
           return {
               ...state,
               bookDetails : newBookDetails
           }
        }
        case 'EditData': {
          let editableBookDetails = state.bookDetails.map(m => {
               if(m?.bookId === action.payload.bookId) {
                   return action.payload
               }
               return m;
           })
           console.log(editableBookDetails);
           return {
               ...state,
               bookDetails: editableBookDetails
           }
        }

        case 'AddBook': {
            let newValues = action.payload;
            console.log(newValues);
            return {
                ...state,
                bookDetails: [...state.bookDetails, action.payload]
            }
        }
        default:{
            return state;
        }
    }
}

export default myReducer;