
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import Main from './components/Main';


function App() {
  return (
    <div className='main' >
      <Router>
      <Routes>
        <Route  path='/'  element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/main" element={<Main/>} />
      </Routes>
      </Router>
 
        </div>
  );
}

export default App;
