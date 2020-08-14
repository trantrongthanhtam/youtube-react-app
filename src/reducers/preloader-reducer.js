import {
	RECEIVE_MUSICS,
	FETCH_MUSICS_FAILED
} from "../actions/music-actions";

const initialState = {
	visible: true
};

export default function preloaderReducer(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_MUSICS:
		case FETCH_MUSICS_FAILED: {
			const { visible } = action;
			return {
				...state,
				visible: visible
			};
		}

		default:
			return state;
	}
}
