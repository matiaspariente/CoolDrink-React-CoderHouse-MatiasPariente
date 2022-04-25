import { useEffect, useState } from "react";
import { products as productsData } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
  
    useEffect(() => {
      const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () =>{
          resolve(productsData)
        }, 2000)
      })
  
      getProducts.then( (result) => {
        setProducts(result)
      }).catch((err) => {
          console.log('hubo un error', err);
      })
    }, [])

    return(
        <div>
        <ItemList items={products}/>
        </div>
    )
}
export default ItemListContainer