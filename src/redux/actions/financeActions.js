import {ActionTypes} from "../constants/action-types";

export const setFinance = (data) =>{
    return {
        type: ActionTypes.SET_FINANCE,
        payload: data,
    };
};