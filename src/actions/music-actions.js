//action creator
export const FETCH_MUSICS = "FETCH_MUSICS";
export const RECEIVE_MUSICS = "RECEIVE_MUSICS";
export const FETCH_MUSICS_FAILED = "FETCH_MUSICS_FAILED";

export function fetchMusic() {
	return (dispatch, getstate) => {
		console.log("fetching music list...");
		dispatch({ type: FETCH_MUSICS });
		fetch("/music.json")
			.then(res => res.json())
			.then(json => {
				console.log("json", json.status);
				// fake long wait to fetch data using set timeout
				setTimeout(() => {
					dispatch({
						type: RECEIVE_MUSICS,
						data: json,
						visible: false
					});
				}, 2000);
			})
			.catch(error => {
				dispatch({
					type: FETCH_MUSICS_FAILED,
					visible: false,
					error
				});
			});
	};
}
