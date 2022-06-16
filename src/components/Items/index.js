import './items.css'
import {Item} from "../Item";

export const Items = (props) => {
    const {itemsInShop, onChange} = props;
    return <div className={"items-root"}>
        {
            itemsInShop.map((item) => (
                <Item
                    id={item.id}
                    key={item.id}
                    label={item.label}
                    description={item.description}
                    price={item.price}
                    inCart={item.inCart}
                    onChange={onChange}
                />
            ))
        }
    </div>
}