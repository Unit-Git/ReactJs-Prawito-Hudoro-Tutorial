import React, { Component, createContext } from 'react';

const RootContext = createContext();

// ** Untuk Provider
const Provider = RootContext.Provider;
const GlobalProvider = ChildrenProvider => {
	return class ParentProvider extends Component {
		constructor(props) {
			super(props);

			this.state = {
				totalOrder: 3,
				valueCounter: '',
			};

			this.orderInput = React.createRef();
		}

		componentDidMount() {
			this.setState({
				valueCounter: this.state.totalOrder,
			});
		}

		plusOrder = counterBox => {
			return this.setState(
				{
					totalOrder: this.state.totalOrder + 1,
				},
				() => {
					counterBox.current.value = this.state.totalOrder;
				}
			);
		};

		minusOrder = counterBox => {
			if (this.state.totalOrder > 0) {
				return this.setState(
					{
						totalOrder: this.state.totalOrder - 1,
					},
					() => {
						counterBox.current.value = this.state.totalOrder;
					}
				);
			}
		};

		dispatchContext = action => {
			if (action.type === 'PLUS_ORDER') {
				return this.plusOrder(action.counterBox);
			}
			if (action.type === 'MINUS_ORDER') {
				return this.minusOrder(action.counterBox);
			}
		};

		render() {
			return (
				<Provider
					value={{
						state: this.state,
						dispatch: this.dispatchContext,
					}}>
					<ChildrenProvider {...this.props} />
				</Provider>
			);
		}
	};
};

// ** Consumer
const Consumer = RootContext.Consumer;

export const GlobalConsumer = ChildrenConsumer => {
	return class parentConsumer extends Component {
		render() {
			return (
				<Consumer>
					{value => {
						return <ChildrenConsumer {...this.props} {...value} />;
					}}
				</Consumer>
			);
		}
	};
};

export default GlobalProvider;
