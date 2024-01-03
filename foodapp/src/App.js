
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import { CartProvider } from './components/ContextReducer.js';
import Cart from './screens/Cart.jsx';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>

        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/mycart' element={<Cart />}></Route>


      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
