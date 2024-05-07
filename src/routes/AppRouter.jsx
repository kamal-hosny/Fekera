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
        {path: "/products/:slug", element: <Products />}
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
