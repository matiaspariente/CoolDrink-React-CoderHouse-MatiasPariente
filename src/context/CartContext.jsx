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

    const isInCart = (id) => {
        return carts.some(item => item.id === id) // devuelve true si encuentra algun componente con dicho id
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){ // si existe solo le agrega la cantidad correspondiente
            return setCarts(
                carts.map(product => product.id === item.id
                ? {...product, quantity: product.quantity + quantity}
                : product    
                )
            );
        }
        setCarts([...carts,{...item, quantity}]) //si no existe se suma un nuevo elemento
    };

    const clear = () => { // Se vacia carrito
        setCarts([]);
    };

    const removeItem = (id) => { // se elimina item por id
        setCarts(carts.filter(item => item.id !== id));
    };

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