import {combineReducers} from "redux";
import {productsReducer, selectedProductsReducer} from "./productsReducer";
import {adminReducer} from "./adminReducer";
import {gameModeReducer, gameModeRewardReducer} from "./gameModeReducer";
import {requestReducer} from "./requestReducer";
import {avatarsReducer, removeAvatarReducer, updateAvatarReducer} from "./avatarReducer";
import {financeReducer} from "./financeReducer";


const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
    gameModes: gameModeReducer,
    requests: requestReducer,
    admin: adminReducer,
    allAvatars :avatarsReducer,
    finance :financeReducer,
});

export default reducers;