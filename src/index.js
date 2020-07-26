import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const globalState = {
	totalOrder: 0,
};

// reducer
const rootReducer = (state = globalState, action) => {
	//// jika menambahkan order
	if (action.type === 'PLUS_ORDER') {
		return {
			...state,
			totalOrder: state.totalOrder + 1,
		};
	}

	if (action.type === 'MINUS_ORDER') {
		if (state.totalOrder > 0) {
			return {
				...state,
				totalOrder: state.totalOrder - 1,
			};
		}
	}

	return state;
};

const store = createStore(rootReducer);

const indexComponent = (
	<Provider store={store}>
		<Home />
	</Provider>
);

ReactDOM.render(indexComponent, document.getElementById('root'));

// * StateLess Component
// const HelloComponent = () => {
// 	return <p>Hello Functional Component</p>;
// };

// * StateFull Component

// class StateFullComponent extends React.Component {
// 	render() {
// 		return <p>StateFull Component</p>;
// 	}
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
