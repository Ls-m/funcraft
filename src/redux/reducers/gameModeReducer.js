import {ActionTypes} from "../constants/action-types";


export const gameModeReducer = (state = {modes: []}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_GAME_MODES:
            return {...state, modes: payload}
        default:
            return state
    }
}

