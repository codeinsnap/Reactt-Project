import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home/home'
import AboutUs from './components/About-Us/aboutUs';
import Navbar from './components/Navbar/navbar';
import Products from './components/Product/products';
import Product from './components/Product/product';

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
          </Routes>
     </Router>
    </div>
  );
}

export default App;
