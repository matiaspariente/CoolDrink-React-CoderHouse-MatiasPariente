import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:productID' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>  
  );
}

export default App;