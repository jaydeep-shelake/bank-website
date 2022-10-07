import { AUTH_STATE, ERROR, LOG_OUT, SIGN_IN, SIGN_UP } from "../actions/types";

const authReducer=(state={user:null,err:null},action)=>{
    switch (action.type) {
        case SIGN_IN:
            return{...state,user:action.payload}
        case SIGN_UP:
            return {...state,user:action.payload}
        case AUTH_STATE:
            return {...state,user:action.payload}
   
      case LOG_OUT :
          return {...state,user:action.payload}

    case ERROR:
        return {...state,err:action.payload}
        default:
            return state
    }
}
export default authReducer;