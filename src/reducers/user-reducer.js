import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/user-actions";
const defaultState = {
  favorite: [],
};
export default function userReducer(state = defaultState, action) {
  const { favorite } = state;
  let updateFavorite;
  switch (action.type) {
    case ADD_TO_FAVORITE:
      const { songId } = action;
      const foundSong = favorite.find(
        item =>
            item === songId
    ); 
      if (foundSong) {
        return state;
      }else {
          updateFavorite = [...favorite, songId];
          return {favorite: updateFavorite};
      }
      
      

    case REMOVE_FROM_FAVORITE:
      const { removedsongId } = action;
      updateFavorite = favorite.filter((item) => item !== removedsongId);
      return {favorite: updateFavorite}

    default:
      return state;
  }
}
