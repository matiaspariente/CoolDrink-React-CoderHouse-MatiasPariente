import { useEffect, useState } from "react";
import { products as productsData } from "../data/products";
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const {categoryID} = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState( true )
  
    useEffect(() => { //hook de montaje para renderear el listado completo de productos
      (async () => {
        const listProducts = await getProducts()
        setProducts(listProducts)
        setLoading( false )
        } 
      )()
    },[])

    const getProducts = () =>{ 
      return new Promise( (res) => {
        setLoading( true )
        setTimeout(()=>{
          res(productsData)
        },3000)
      })
    }    


    useEffect(() => { // hook para cambio o eleccion de categoria
      (async () => {
        const categoryProducts = await getCategory()
        if(categoryProducts.length){
          setProducts(categoryProducts)
          setLoading( false )
        } 
        else { // si la categoria no existe se muestra el listado completo de productos
          setProducts(productsData)
          setLoading( false )
        } 
      })()
  
    }, [categoryID])

    const getCategory = () =>{
      return new Promise( (res) => {
        setLoading( true )
        setTimeout(()=>{
          res(productsData.filter(r=> r.category == categoryID)) // se filtran los productos por la categoria correspondiente
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