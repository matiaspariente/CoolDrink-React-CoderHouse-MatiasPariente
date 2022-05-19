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
            <div>
                <ul className="menu menu-horizontal pr-5">
                    <li tabindex="0">
                        <div>Productos 
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </div>
                        <ul class="p-2 bg-base-100">
                            <li><Link to='/category/Cerveza'>Cerveza</Link></li>
                            <li><Link to='/category/Vino'>Vino</Link></li>
                            <li><Link to='/category/Aperitivo'>Aperitivo</Link></li>
                            <li><Link to='/category/BebidaBlanca'>Bebida Blanca</Link></li>
                            <li><Link to='/category/Champagne'>Champagne</Link></li>
                            <li><Link to='/category/Whisky'>Whisky</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="flex-none">
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar