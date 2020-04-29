import { createStore, applyMiddleware, combineReducers } from "redux";

const init_state_reducer_gists_id = {
	gistsId: ""
};
const reducer_gist_id = (state = init_state_reducer_gists_id, action) => {
	if (action.type === "GIST_DETAILS") {
		return {
			...state,
			gistsId: action.gistsId
		};
	}

	return state;
};

const logger = store => next => action => {
	console.log("dispatching", action);
	let result = next(action);
	console.log("next state", store.getState());
	return result;
};

export default createStore(
	combineReducers({
		reducer_gist_id,
	}),
	applyMiddleware(logger)
);
