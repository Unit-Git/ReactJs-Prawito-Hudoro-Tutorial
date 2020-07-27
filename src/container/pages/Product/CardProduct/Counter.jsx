import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../../../redux/globalActionsType';

class Counter extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.input = React.createRef();
	// }

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
			<div className='counter'>
				<button className='minus' onClick={this.props.handleMinus}>
					-
				</button>
				<input className='input-counter' type='text' value={this.props.order} />

				<button className='plus' onClick={this.props.handlePlus}>
					+
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		order: state.totalOrder,
	};
};

// memanggil dispatch
const mapDispatchToProops = (dispatch) => {
	return {
		handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
		handleMinus: () => dispatch({ type: ActionType.PLUS_ORDER }),
	};
};

export default connect(mapStateToProps, mapDispatchToProops)(Counter);
