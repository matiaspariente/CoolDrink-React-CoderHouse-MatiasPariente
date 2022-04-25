import BrandWidget from "./BrandWidget"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <div class="navbar bg-base-100 shadow-xl">
            <div class="flex-1">
                <BrandWidget/>
            </div>
            <div class="flex-1">
                <a  class="normal-case text-xl">TIENDA DE BEBIDAS</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><p>Cervezas</p></li>
                    <li><p>Vinos</p></li>
                    <li><p>Aperitivos</p></li>
                </ul>
            </div>
            <div class="flex-none">
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar