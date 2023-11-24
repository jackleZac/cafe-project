
import './App.css';
import './index.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Header />  
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route exact='/cart' element={<Cart />} />
            <Route exact='/about' element={<About />} />
        </Routes>
      </Router>
  )
}

export default App
