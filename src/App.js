import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Carts from './components/Carts';
import NavBar from './components/NavBar';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:productID' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
          <Route path='/cart/' element={<Carts/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>  
  );
}

export default App;