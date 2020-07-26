const redux = require('redux');

// # Membuat Default State
const initialState = {
	value: 0,
	name: 'Unit17',
	age: 20,
};

//* Reducer
// # Membuat reducer
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_AGE':
			return {
				...state,
				age: state.age + 1,
			};
		case 'CHANGE_VALUE':
			return {
				...state,
				value: state.value + action.newValue,
			};
		default:
			return state;
	}
};

//# membuat Store
const createStore = redux.createStore;

//* Store
//# Memanggil Store
const store = createStore(rootReducer);
console.log(store.getState());

//* Subcriptions
store.subscribe(() => {
	console.log('store change', store.getState());
});

//* Dispatching action
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANGE_VALUE', newValue: 2 });
console.log(store.getState());
