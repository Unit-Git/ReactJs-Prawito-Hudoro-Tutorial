import React, { Component, Fragment, createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//-> pages
import Product from '../pages/Product/Product';
import LifeCycleComponent from '../pages/LifeCylcleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import MainYoutubeComp from '../pages/YoutubeComp/MainYoutubeComp';

//-> components
import NavTop from '../../component/Navigations/Nav-top';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

const RootContext = createContext();
//# provider akan menyimpan state global
const Provider = RootContext.Provider;

class Home extends Component {
	constructor(props) {
		super(props);

		this.orderInput = React.createRef();
		this.state = {
			totalOrder: 3,
		};
	}

	// state = {

	// };

	componentDidMount() {
		this.orderInput.current.value = this.state.totalOrder;
	}

	plusOrder = () => {
		return this.setState(
			{
				totalOrder: this.state.totalOrder + 1,
			},
			() => {
				return (this.orderInput.current.value = this.state.totalOrder);
			}
		);
	};

	minusOrder = () => {
		if (this.state.totalOrder > 0) {
			return this.setState(
				{
					totalOrder: this.state.totalOrder - 1,
				},
				() => {
					return (this.orderInput.current.value = this.state.totalOrder);
				}
			);
		}
	};

	dispatchContext = action => {
		if (action.type === 'PLUS_ORDER') {
			return this.plusOrder();
		}
		if (action.type === 'MINUS_ORDER') {
			return this.minusOrder();
		}
	};

	render() {
		return (
			<Router>
				<Provider
					value={{
						state: this.state,
						dispatch: this.dispatchContext,
						ref: {
							orderInput: this.orderInput,
						},
					}}>
					<Fragment>
						<NavTop
							blog='/'
							product='/products'
							lifeCycle='/lifecycle'
							youtubeComp='/yt-comp'
						/>

						<Route path='/' exact component={BlogPost} />
						<Route path='/detail-post/:id' component={DetailPost} />
						<Route path='/products' component={Product} />
						<Route path='/yt-comp' component={MainYoutubeComp} />
						<Route path='/lifecycle' component={LifeCycleComponent} />
					</Fragment>
				</Provider>
			</Router>
		);
	}
}

export { RootContext };
export default Home;
