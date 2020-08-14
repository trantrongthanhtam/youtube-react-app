import {
	FETCH_MUSICS,
	RECEIVE_MUSICS,
	FETCH_MUSICS_FAILED
} from "../actions/music-actions";

const initialState = {
	total: 0,
	items: []
};

export default function musicsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_MUSICS:
			return { ...state };

		case RECEIVE_MUSICS: {
			const { items, total } = action.data;
			return {
				...state,
				items: items,
				total: total
			};
		}
		case FETCH_MUSICS_FAILED:
			return { ...state };
		default:
			return state;
	}
}
