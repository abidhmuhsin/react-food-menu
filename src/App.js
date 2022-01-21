import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route,Routes, Navigate} from 'react-router-dom'
import Cart from './pages/Cart';

function App() {
  return (
    <div className="container">
      {/* <h1> MY Food App</h1> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cart" element={<Cart/>}/>

          {/* Match any other routes and redirect to root */}
          <Route path="*" element={<Navigate replace to="/" />} > 
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
