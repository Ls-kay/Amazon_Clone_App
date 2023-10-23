import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Containers/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navbar />}>
            {/* <h1>Home Page</h1> */}
          </Route>           
          <Route path="/login" element={"Login"}>
            {/* <h1>Login</h1> */}
          </Route>          
          <Route path="/checkout" element={"Checkout"}>
            {/* <h1>Checkout</h1> */}
          </Route>
        </Routes>
    </div>
    </Router>

  );
}

export default App;
