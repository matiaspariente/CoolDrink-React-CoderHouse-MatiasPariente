import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const {categoryID} = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState( true )
    const [exist, setExist] = useState(true)
    
    useEffect(() => {
      setExist(true)
      categoryID ? getCategory(categoryID) : getItems() //si el hook es por category id solo se trae productos por categoria caso contrario listado completo
    }, [categoryID])
    
    const getCategory = async (id) => {
      const db = getFirestore()
      const itemsCollection = collection(db, 'items')
      const q = query( itemsCollection, where( 'category', '==', id ) )


    
      const snapshot = await getDocs( q )

      if (snapshot.size > 0) {
        const itemsData = snapshot.docs.map( d => ({'id': d.id, ...d.data()}) )
        setProducts(itemsData)
        setLoading( false )
      }else{
        setLoading( false )
        setExist(false)
      }
    }
    
    const getItems = () => {
      const db = getFirestore()
      const itemsCollection = collection(db, 'items')
      getDocs( itemsCollection ).then( snapshot => {
        if (snapshot.size > 0) {
          const itemsData = snapshot.docs.map( d => ({'id': d.id, ...d.data()}) )
          setProducts(itemsData)
          setLoading( false ) 
        }
      })
    }


    return( // se pone en estado de carga hasta cumplir la promesa mostrando animacion
        <div>
          {loading ?
            <div className="flex justify-center m-20 h-20">
              <img src="../img/logoAnimado.gif" alt="Animacion Carga" />
            </div>
          :
            <>
            {exist ?
              <div> 
                <ItemList items={products}/>
              </div>
            :
            <div className="alert alert-error shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! Categoria Inexistente.</span>
              </div>
            </div>         
            }
            </>
          }
        </div>
    )
}
export default ItemListContainer