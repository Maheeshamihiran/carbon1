import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './component/SignUp/SignUp';
import Login from './component/LoginPage/LoginPage';
import Logged from './component/Logged/Logged';
import Busness from './component/Busness/Busness';
import Facilities from './component/Facilities/Facilities';
import Energy from './component/Energy/Energy';
import Transportation from './component/Transportation/Transportation';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logged" element={<Logged />} />
          <Route path="/busness" element={<Busness />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/transportation" element={<Transportation />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;