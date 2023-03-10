import { ACTIONS } from "./action";


const reducers = (state: any, action: any) => {
    switch(action.type){
        case ACTIONS.NOTIFY:
            return {
                ...state,
                notify: action.payload
            };
        case ACTIONS. ADD_SOCIAL:
            return {
                ...state,
                cart: action.payload
            };
        default:
            return state;
    }
}

export default reducers