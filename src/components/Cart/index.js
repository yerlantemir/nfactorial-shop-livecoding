import './cart.css';
import {Item} from "../Item";
export const Cart = (props) => {
    const {itemsInCart, onChange} = props;
    return <div className={"cart-root"}>
        {itemsInCart.map((item) => (
            <Item
                id={item.id}
                key={item.id}
                label={item.label}
                description={item.description}
                  price={item.price}
                inCart={item.inCart}
                onChange={onChange}
            />
            )) }
    </div>
}