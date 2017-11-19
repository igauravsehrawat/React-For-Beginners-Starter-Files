import React from 'react';
import { formatPrice } from '../helpers';

class Dish extends React.Component {
    render() {
        const { details } = this.props;
        const isAvailable = details.status === "available";
        const buttonText = isAvailable ? "Add To Order" : "Sold out";
        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button disabled={!isAvailable} onClick={this.props.addToOrder}>{buttonText}</button>
            </li>
        )
    }
}

export default Dish;