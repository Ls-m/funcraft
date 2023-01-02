import {ActionTypes} from "../constants/action-types";

export const requestReducer = (state = {requests:[]}, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_REQUESTS:
            return{...state,requests:payload}
        default:
            return state
    }
};