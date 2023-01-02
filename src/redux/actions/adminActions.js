import {ActionTypes} from "../constants/action-types";

export const setAdmin = (admin) => {
    return {
        type: ActionTypes.SET_ADMIN,
        payload: admin,
    }
}