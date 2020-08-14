import { combineReducers } from "redux";
import musicsReducer from "./musics-reducer";
import preloaderReducer from "./preloader-reducer";
import userReducer from './user-reducer';


const rootReducer = combineReducers({
	musicList: musicsReducer,
	preload: preloaderReducer,
	favorite: userReducer,
});

export default rootReducer;
