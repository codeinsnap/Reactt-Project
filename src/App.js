import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home/home'
import AboutUs from './components/About-Us/aboutUs';

function App() {
  return (
    <div className="App">
     <Router>
       {/* <Header /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AboutUs' element={<AboutUs />} />
          </Routes>
        {/* <Footer /> */}
     </Router>
    </div>
  );
}

export default App;
