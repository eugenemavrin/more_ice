import { DATA_NAMES } from '../actions/actionTypes'

const initialState = {
	data: null,
	isFetching: false,
	error: null
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case DATA_NAMES.START_FETCH:
			return { ...state, isFetching: false, error: action.payload };
		case DATA_NAMES.FINISH_FETCH:
			return { isFetching: true, data: action.payload, error: null };
		case DATA_NAMES.FAIL_FETCH:
			return { ...state, isFetching: false, error: action.payload };
		default:
			return state;

	}
};

export default reducer;
