import { Link } from "react-router-dom"

const BrandWidget = () => { // Funcion que retorna imagen de logo de la marca, se linkea al directorio Raiz
    return(
        <div className="avatar">
            <div className="w-24 ">
                <Link to='/'>  
                    <img src="../img/logo.png" alt="Cool Drink"/>
                </Link>   
            </div>
        </div>
    )
}

export default BrandWidget