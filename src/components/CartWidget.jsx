import { Link } from "react-router-dom"

const CartWidget = () => { // Funcion que retorna imagen del carrito
    return(
        <div className="btn btn-ghost">
            <div className="w-7">
                <Link to='/carrito/'>  
                    <img src="../img/CartWidget.png" alt="CartWidget"/>
                </Link>    
            </div>
        </div>
    )
}

export default CartWidget