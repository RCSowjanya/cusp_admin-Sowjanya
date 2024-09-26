// redux/reducers/authReducer.js

const initialState = {
    AdminUserName: null,
    AdminEmailID:null
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_TOKENS':
        return {
          ...state,
          AdminUserName: action.payload.name,
          AdminEmailID: action.payload.username
         
        };
        case 'RESET_STORE':
          return initialState; // Reset the state to initial values
    
      default:
        return state;
    }
  }
  