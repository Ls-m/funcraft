import {ActionTypes} from "../constants/action-types";


export const setRequests = (requests) => {
    return {
        type: ActionTypes.SET_REQUESTS,
        payload: requests,
    };
}