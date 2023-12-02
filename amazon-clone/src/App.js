import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Containers/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomePage/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Header /> */}
          </Route>           
          <Route path="/login" element={<Navbar/>}>
            {/* <h1>Login</h1> */}
          </Route>          
          <Route path="/checkout" element={<Navbar/>}>
            {/* <Header /> */}
          </Route>
        </Routes>
    </div>
    </Router>

  );
}

export default App;
