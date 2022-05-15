import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carts = () => {

    const { carts } = useContext(CartContext)

    return (
        <div>Carrito: {carts} </div>
    )
}

export default Carts