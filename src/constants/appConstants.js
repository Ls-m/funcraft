
import {cookies} from "../App";

//https://api.funcraft.ir/api/info
export const AppConstants = {
    SITE_ADDR: "http://localhost:3000",
    WEB_SERVICE_URL: "https://api.funcraft.ir/api/info",
    LOGIN: "/admin/login",
    REGISTER: "/admin/login/register",
    CHANGE_PASSWORD: "/admin/login/password",
    GET_ALL_GAMES_URL: "/admin/game",
    GET_ALL_REQUESTS_URL: "/admin/requests",
    ACCEPT_REQUEST_URL: "/admin/requests/accept",
    REJECT_REQUEST_URL: "/admin/requests/reject",
    LOGIN_WITH_GOOGLE_URL: "/admin/login/google",
    ADD_NEW_GAME_URL: "/admin/game/new",
    ADD_NEW_GAME_MODE_URL: "/admin/game/mode/new",
    SAVE_GAME_MODE_URL: "/admin/game/mode/edit",
    SAVE_GAME_URL: "/admin/game/edit",
    UPLOAD_WEB_GL_URL: "/admin/webgl/upload",
    UPLOAD_ICON_URL: "/admin/icon/upload",
    UPLOAD_BANNER_URL: "/admin/banner/upload",
    UPLOAD_TUTORIAL_URL: "/admin/tutorial/upload",
    DELETE_TUTORIAL_URL: "/admin/tutorial/remove",
    DELETE_GAME_URL: "/admin/game/delete",
    DELETE_GAME_MODE_URL: "/admin/game/mode/delete",
    PUBLISH_GAME_URL: "/admin/game/publish",
    PUBLISH_GAME_MODE_URL: "/admin/game/mode/publish",
    UN_PUBLISH_GAME_URL: "/admin/game/un-publish",
    UN_PUBLISH_GAME_MODE_URL: "/admin/game/mode/un-publish",
    GET_AVATARS_URL: "/admin/avatar",
    UPLOAD_AVATAR_URL: "/admin/avatar/add",
    REMOVE_AVATAR_URL: "/admin/avatar/remove",
    UPDATE_AVATAR_URL: "/admin/avatar/update",
    GET_FINANCE: "/admin/finance",
    GET_TOURNAMENT_TEMPLATES: "/admin/tournament",
    ADD_NEW_TOURNAMENT_TEMPLATE: "/admin/tournament/add",
    EDIT_TOURNAMENT_TEMPLATE: "/admin/tournament/edit",
    SYNC_TOURNAMENT_TEMPLATES: "/admin/tournament/sync",
    UPLOAD_TOURNAMENT_PIC: "/admin/tournament/upload",
    REMOVE_TOURNAMENT_TEMPLATE: "/admin/tournament/remove",
}

export function GetWebServiceUrl(path) {
    return AppConstants.WEB_SERVICE_URL + path;
}

export function GetBasicAuthHeader(admin) {
    return {
        headers: {'token': admin.token}
        // auth: {
        //     username: admin.token,
        //     password: "PASSWORD"
        // }
    }
}

export function LoginBasicAuth(username, password) {
    return {
        auth: {
            username: username,
            password: password
        }
    }
}