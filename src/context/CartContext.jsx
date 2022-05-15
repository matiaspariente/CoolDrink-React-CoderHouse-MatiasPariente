import { createContext, useState } from "react";

export const CartContext = createContext({
    carts:[],
    addItem: () =>{},
    removeItem: () =>{},
    clear: () =>{},
    isInCart: () =>{}
})

const CartProvider = ({children}) => {

    const [carts, setCarts] = useState([])

    const addItem = (itemTitle, quantity) => {
        let items = carts
        const itemCart = {
            item: itemTitle,
            quantity: quantity
            }
        items.push(itemCart)
        console.log(carts)
        setCarts(items) 
    }

    const context = {
        carts,
        addItem
    }

    return(
         <CartContext.Provider value={ context }>
             {children}
         </CartContext.Provider>    
    )
}
export default CartProvider