import {ActionTypes} from "../constants/action-types";

const initialState = {
    avatars: [],
};

export const avatarsReducer = (state = initialState, {type, payload}) =>{
    switch (type){
        case ActionTypes.SET_AVATARS:
            return {...state,avatars:payload}
        default:
            return state
    }
};