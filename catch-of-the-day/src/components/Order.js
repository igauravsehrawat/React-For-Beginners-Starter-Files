import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {
    constructor() {
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key) {
        var dish = this.props.dishes[key];
        var count = this.props.order[key];
        if (!dish || dish.status === 'unavailable') {
            return (
                <li key={key} className="order">
                Sorry, {dish? dish.name : 'Dish'} is no longer available.
                </li>
            )
        }
        return (
            <li key={key} className="order">
                <span>{count} lbs {dish.name}</span>
                <span className="price">{formatPrice(count*dish.price)}</span>
            </li>
        );
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        console.log("order ids are here:: ", orderIds);
        console.log("order is like::", this.props.order);
        console.log("dishes is like::", this.props.dishes);
        console.log("dishes in state::", this.state.dishes);
        var total = orderIds.reduce((sum, orderId) => {
            var quantity = this.props.order[orderId];
            var dish = this.props.dishes[orderId];
            var price = dish.price;
            var value = quantity * price;
            const isAvailable = dish && dish.status === 'available';
            if (isAvailable) {
                return sum + value || 0;
            }
            return sum;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Your Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        {formatPrice(total)}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Order;
