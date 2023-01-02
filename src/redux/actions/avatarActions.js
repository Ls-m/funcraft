import {ActionTypes} from "../constants/action-types";

export const setAvatars = (avatars) =>{
    return {
        type: ActionTypes.SET_AVATARS,
        payload: avatars,
    };
};