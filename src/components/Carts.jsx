import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";
import CartForm from "./CartForm";
import { Link } from "react-router-dom"



const Carts = () => {

    const { carts } = useContext(CartContext)

    return (
        <div>
            <div className="overflow-x-auto w-full p-20">
                <div className="font-bold text-6xl text-center mb-20">
                    <h1>CARRITO</h1>
                </div>

                {carts.length > 0 ? ( // si hay productos en carrito los muestro con la tabla correspondiente
                <>
                    <CartList/>
                    <CartForm/>
                </>
                )
                :
                (   
                    <>
                    <table className="table overflow-x-auto w-full p-20">
                        <thead>
                            <th className="text-lg">carrito vacio</th> 
                        </thead>
                    </table>
                    <Link to="/">
                        <button className="btn mt-10">Ir al Inicio</button>
                    </Link>
                    </>        
                )}
            </div>
        </div>      
    )
}

export default Carts