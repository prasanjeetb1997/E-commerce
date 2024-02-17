import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import ProductD from './components/ProductD/ProductD';
import Cart from './components/Cart/Cart';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/product' element={<ProductD/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
