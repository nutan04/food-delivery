
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router,
  Routes,Route,Link} from 'react-router-dom'
  import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
  import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
   <Router>
    <Routes>

<Route exact path='/' element={<Home/>}></Route>
</Routes>
   </Router>
  );
}

export default App;
