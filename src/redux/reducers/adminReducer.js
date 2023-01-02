import {ActionTypes} from "../constants/action-types";

export const adminReducer = (state = {admin:{}}, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_ADMIN:
            return{...state,admin:payload}
        default:
            return state
    }
};

