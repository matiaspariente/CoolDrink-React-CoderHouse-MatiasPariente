import { useEffect, useState } from "react";
import { products as productsData } from "../data/products";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const { productID } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState( true )
  
    useEffect(() => { // hook de montaje y al modificarse ProductID
      (async () => {
        const productDetail = await getProductDetail()
        setProducts(productDetail)
        setLoading( false )
      })()
  
    }, [productID])

    const getProductDetail = () =>{
      return new Promise( (res) => {
        setTimeout(()=>{
          res(productsData.find(r=> r.id == productID)) // Se busca el producto con el ID correspondiente
        },3000)
      })
    }

    return( // se pone en estado de carga hasta cumplir la promesa mostrando animacion
        <div>
          {loading ?
            <div className="flex justify-center m-20 h-20">
              <img src="../img/logoAnimado.gif" alt="Animacion Carga" />
            </div>
          : 
            <div className="grid grid-cols-2 w-100">
              {products ? <ItemDetail item={products}/>
              :
              <></>
              } 
            </div>  
          }  
        </div>
        
    )
}
export default ItemDetailContainer