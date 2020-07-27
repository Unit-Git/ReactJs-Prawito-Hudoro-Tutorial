import ActionType from './globalActionsType';

const globalState = {
	totalOrder: 0,
};

// reducer
const rootReducer = (state = globalState, action) => {
	//// jika menambahkan order
	if (action.type === ActionType.PLUS_ORDER) {
		return {
			...state,
			totalOrder: state.totalOrder + 1,
		};
	}

	if (action.type === ActionType.MINUS_ORDER) {
		if (state.totalOrder > 0) {
			return {
				...state,
				totalOrder: state.totalOrder - 1,
			};
		}
	}

	return state;
};

export default rootReducer;
