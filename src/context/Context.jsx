import React, { Component, createContext } from 'react';

const RootContext = createContext();

// ** Untuk Provider
const Provider = RootContext.Provider;
const GlobalProvider = ChildrenProvider => {
	return class ParentProvider extends Component {
		constructor(props) {
			super(props);

			this.orderInput = React.createRef();
			this.state = {
				totalOrder: 3,
			};
		}

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
				<Provider
					value={{
						state: this.state,
						dispatch: this.dispatchContext,
						refs: {
							orderInput: this.orderInput,
						},
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
