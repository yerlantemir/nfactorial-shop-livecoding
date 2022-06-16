import './App.css';
import {Cart} from "./components/Cart";
import {Items} from "./components/Items";
import {useEffect, useState} from "react";

const mockItems = [
    {
        id: 1,
        label: `Dalida's hat`,
        description: 'The most amazing hat in the world',
        price: 200,
        inCart: false,
    },
    {
        id: 2,
        label: `Aidar's keyboard`,
        description: 'This keyboard will make you 10x programmer',
        price: 500,
        inCart: false,
    },
    {
        id: 3,
        label: `Milk`,
        description: 'The milk',
        price: 400,
        inCart: true,
    },
]


function App() {
    const [items, setItems] = useState(mockItems);

    const onChange = (id) => {
        const newItems = items.map((item) => {
            console.log(item, id)
            if (id === item.id) {
                return {
                    ...item,
                    inCart: !item.inCart
                }
            }
            return item;
        })
       setItems(newItems);
    }
    useEffect(() => {
        setItems(
           JSON.parse(
               localStorage.getItem('items')
           )
       )
    }, [])
    useEffect(() => {
        window.addEventListener("beforeunload", (ev) =>
        {
            localStorage.setItem('items', JSON.stringify(items));
        });
    }, [items])
  return (
      <div className="root">
          <Items itemsInShop={items.filter((item) => !item.inCart)}
                 onChange={onChange}
          />
        <Cart itemsInCart={items.filter((item) => item.inCart)} onChange={onChange}/>
      </div>
  );
}

export default App;

// <App> onChange => Items => Item
//     <Items>
//         <Item></Item>
//     </Items>
//     <Cart>
//         <Item></Item>
//     </Cart>
// </App>
