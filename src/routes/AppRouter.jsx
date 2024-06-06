// css style
import '../App.css';

// 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// pages
import MainHeader from '../pages/header/MainHeader';
import Sale from '../pages/sale/Sale'
import Footer from '../pages/footer/Footer';
import Layout from '../components/layout/Layout';
import Specialoffers from '../pages/special-offers/Specialoffers';
import Products from '../pages/products/Products';
import Register from '../pages/sign/Register';
import Login from '../pages/sign/Login';
import ForgotPassword from '../pages/sign/ForgotPassword';
import Wishlist from '../pages/wishlist/Wishlist';
import Cart from '../pages/cart/Cart';
import Shop from '../pages/shop/Shop';



function App() {
  const Routing = createBrowserRouter([
    {
      path:"/",
      element: (<>
          <Layout />
      </>),
      children: [
        {index: true, element: <Sale />},
        {path: "/sale", element: <Sale />},
        {path: "/specialoffers", element: <Specialoffers />},
        {path: "/products/:slug", element: <Products />},
        {path: "/login", element: <Login />},
        {path: "/register", element: <Register />},
        {path: "/forgot-password", element: <ForgotPassword />},
        {path: "/wishlist", element: <Wishlist />},
        {path: "/cart", element: <Cart />},
        {path: "/shop/:slug", element: <Shop />}
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={Routing} /> 
    </>
  );
}

export default App;
