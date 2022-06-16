import './item.css'
import {useState} from "react";

export const Item = (props) => {
    const {id, label, description, price, inCart, onChange } = props;
    const onButtonClick = () => {
        onChange(id);
    }

    return <div className={"item-root"}>
        <h4>
        {label}
        </h4>
        <p className={"description"}>
             {description}
        </p>
        <div className={"footer-container"}>

            <button onClick={onButtonClick}>
                {inCart ? 'Remove from cart' : 'Add to cart'}
            </button>

            <p className={"price"}>
                {price} $
            </p>
        </div>
    </div>
}