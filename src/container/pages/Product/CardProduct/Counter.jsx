import React, { Component } from 'react';
import { RootContext } from '../../../Home/Home';
// import { connect } from 'react-redux';
// import ActionType from '../../../../redux/globalActionsType';

class Counter extends Component {
	// heandleCounterChange = (newValue) => {
	// 	this.props.onCounterChange(newValue);
	// 	this.input.current.value = this.state.order;
	// };

	// heandlePlus = () => {
	// 	this.setState(
	// 		{
	// 			order: this.state.order + 1,
	// 		},
	// 		() => {
	// 			this.heandleCounterChange(this.state.order);
	// 		}
	// 	);
	// };
	// heandleMinus = () => {
	// 	if (this.state.order > 1) {
	// 		this.setState(
	// 			{
	// 				order: this.state.order - 1,
	// 			},
	// 			() => {
	// 				this.heandleCounterChange(this.state.order);
	// 			}
	// 		);
	// 	}
	// };

	render() {
		return (
			<RootContext.Consumer>
				{value => {
					const { ref, dispatch } = value;

					return (
						<div className='counter'>
							<button
								className='minus'
								onClick={() => dispatch({ type: 'MINUS_ORDER' })}>
								-
							</button>
							<input
								className='input-counter'
								type='text'
								ref={ref.orderInput}
								// value={state.totalOrder}
							/>

							<button
								className='plus'
								onClick={() => dispatch({ type: 'PLUS_ORDER' })}>
								+
							</button>
						</div>
					);
				}}
			</RootContext.Consumer>
		);
	}
}

//* redux
// const mapStateToProps = (state) => {
// 	return {
// 		order: state.totalOrder,
// 	};
// };

//* redux
//=> memanggil dispatch
// const mapDispatchToProops = (dispatch) => {
// 	return {
// 		handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
// 		handleMinus: () => dispatch({ type: ActionType.PLUS_ORDER }),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProops)(Counter);

export default Counter;
