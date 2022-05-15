import { useEffect, useState } from "react";
import { products as productsData } from "../data/products";
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const {categoryID} = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState( true )
  
    useEffect(() => { // hook para cambio o eleccion de categoria
      (async () => {
        const categoryProducts = await getCategory(categoryID)
        setProducts(categoryProducts)
        setLoading( false )
        } 
      )()
  
    }, [categoryID])

    const getCategory = (id) =>{
      return new Promise( (res) => {
        setLoading( true )
        setTimeout(()=>{
          res(id ? productsData.filter(r=> r.category === id ): productsData) // se filtran los productos por la categoria correspondiente
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
            <ItemList items={products}/>
          }
        </div>
    )
}
export default ItemListContainer