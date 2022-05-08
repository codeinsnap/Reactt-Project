import './App.css';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home/home'
import AboutUs from './components/About-Us/aboutUs';
import Navbar from './components/Navbar/navbar';
import Products from './components/Product/products';
import Product from './components/Product/product';
import Cart from './components/Cart/cart';
import SignInForm from './components/From/form';

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<Product/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<SignInForm/>} />
          </Routes>
        {/* <Footer/> */}
     </Router>
    </div>
  );
}

export default App;
