import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Home from "./pages/home"
//import Product from "./components/product";
//import Basket from './components/basket';
import Login from './pages/login';
import Register from './pages/register';

function App()
{
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  ); 
}


export default App;