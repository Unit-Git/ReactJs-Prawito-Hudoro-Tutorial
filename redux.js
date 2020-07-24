const redux = require('redux');

// # Membuat Default State
const initialState = {
	value: 0,
	name: 'Unit17',
};

//* Reducer
// # Membuat reducer
const rootReducer = (state = initialState, action) => {
	return state;
};

//# membuat Store
const createStore = redux.createStore;

//* Store
//# Memanggil Store
const store = createStore(rootReducer);
console.log(store.getState());

//* Dispatching action

//* Subcriptions
