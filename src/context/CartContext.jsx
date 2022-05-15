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
        const busqueda = items.findIndex(item => item.item === itemTitle); // se verifica si ya existe el producto
        if (busqueda!==-1) {
            items[busqueda].quantity += quantity // si existe a traves del indice se agrega la cantidad correspondiente al producto
        }
        else{ // si no existe aun se carga como un producto nuevo en la tabla
            const itemCart = {
                item: itemTitle,
                quantity: quantity
                }
            items.push(itemCart) // Se agrega al array
        }
        setCarts(items) // se setea carts
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