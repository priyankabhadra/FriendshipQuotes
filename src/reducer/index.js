import initialDetails from "../mockData";

const rootReducer = (state = initialDetails,action) => {
    switch(action.type) {
        case "DeleteCard" : {
            let newDetails = state.values.filter((f) => f.id !== action.payload);
            return {
                ...state,
                values : newDetails
            }
        }

        case "EditCard" : {
            let editDetails = state.values.map(f => {
                if(f.id == action.payload.id) {
                    return action.payload;
                }
             return f;
            }
         )
          return{
            ...state,
            values : editDetails
           }
        }

        case "AddCart" : {
            return {
                ...state,
                values : [...state.values, action.payload]
            }
        }

        default : {
            return {...state};
        }
    }
}

export default rootReducer;