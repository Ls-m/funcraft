import {ActionTypes} from "../constants/action-types";

export const setGameModes = (gameModes) => {
    return {
        type: ActionTypes.SET_GAME_MODES,
        payload: gameModes,
    };
}
