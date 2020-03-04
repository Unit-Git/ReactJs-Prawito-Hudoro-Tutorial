import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './container/home/Home';

ReactDOM.render(<Home />, document.getElementById('root'));

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
