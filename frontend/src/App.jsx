import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Home from "./pages/home";
//import Product from "./components/product";
//import Basket from './components/basket';
import Cart from './pages/cart';
import Login from './pages/login';
import Register from './pages/register';
import AccountSettings from "./pages/accountSettings.jsx";
import ProtectedRoute from "./routes/protectedRoutes";
import NotFound from './pages/notFound';

function App()
{
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <AccountSettings />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  ); 
}


export default App;