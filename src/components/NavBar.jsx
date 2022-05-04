import { Link } from "react-router-dom"
import BrandWidget from "./BrandWidget"
import CartWidget from "./CartWidget"

const NavBar = () => { // renderizado de navbar con los linkeos correspondientes a las categorias
    return(
        <div className="navbar bg-base-100 shadow-xl">
            <div className="flex-1">
                <BrandWidget/>
            </div>
            <div className="flex-1">
                <strong  className="normal-case text-xl">TIENDA DE BEBIDAS</strong>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/category/Cerveza'>Cerveza</Link></li>
                    <li><Link to='/category/Vino'>Vino</Link></li>
                    <li><Link to='/category/Aperitivo'>Aperitivo</Link></li>
                    <li><Link to='/category/BebidaBlanca'>Bebida Blanca</Link></li>
                    <li><Link to='/category/Champagne'>Champagne</Link></li>
                    <li><Link to='/category/Whisky'>Whisky</Link></li>
                </ul>
            </div>
            <div className="flex-none">
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar