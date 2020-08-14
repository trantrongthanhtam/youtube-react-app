export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

//action creator
export function addToFavorite(id) {
  return {
    type: ADD_TO_FAVORITE,
    songId: id,
  };
}

export function removeFromFavorite(id) {
  return {
    type: REMOVE_FROM_FAVORITE,
    removedsongId: id,
  };
}
