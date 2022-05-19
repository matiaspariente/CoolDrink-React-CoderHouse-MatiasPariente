import { createContext, useState } from "react";

export const CartContext = createContext({
    carts:[],
    addItem: () =>{},
    removeItem: () =>{},
    clear: () =>{},
    isInCart: () =>{},
    totalPrice: () =>{},
    totalCount: () =>{},
    substractOneItem: () =>{}
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

    const substractOneItem = (item) => {
        if (item.quantity > 1){ // si existe solo le agrega la cantidad correspondiente
            return setCarts(
                carts.map(product => product.id === item.id
                ? {...product, quantity: product.quantity - 1}
                : product    
                )
            );
        }
    };

    const clear = () => { // Se vacia carrito
        setCarts([]);
    };

    const removeItem = (id) => { // se elimina item por id
        setCarts(carts.filter(item => item.id !== id));
    };

    const totalPrice = () => {
        return carts.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        );
      };
    
    const totalPriceUnit = () => {
        return carts.reduce((total, item) => total + item.price, 0);
      };   

    const totalCount = () => {
        return carts.reduce((total, item) => total + item.quantity, 0);
      };
    
      

    const context = {
        carts,
        totalPrice,
        totalPriceUnit,
        addItem,
        totalCount,
        removeItem,
        clear,
        substractOneItem
    }

    return(
         <CartContext.Provider value={ context }>
             {children}
         </CartContext.Provider>    
    )
}
export default CartProvider