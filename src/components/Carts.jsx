import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carts = () => {

    const { carts } = useContext(CartContext)

    return (
        <div>
            <table className="table table-compact m-20">
                <thead>
                    <th>Title</th><th>Cantidad</th>
                </thead>
                {carts.map(carts => 
                    <tbody>
                        <td>{carts.item}</td><td>{carts.quantity}</td>
                    </tbody>
                )} 
            </table>
        </div>
    )
}

export default Carts