import {ActionTypes} from "../constants/action-types";

export const financeReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_FINANCE:
            return {...state, data: payload}
        default:
            return state
    }
}
