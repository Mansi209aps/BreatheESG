import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import DataEntry from './Pages/DataEntry';
import Tracker from './Pages/Tracker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/dataentry' element={<DataEntry />}></Route>
        <Route path='/tracker' element={<Tracker />}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
