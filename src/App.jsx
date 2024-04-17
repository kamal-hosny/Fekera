// css style
import './App.css';

// 
import { Route, Routes } from 'react-router-dom';

// pages
import MainHeader from './pages/header/MainHeader';
import Sale from './pages/sale/Sale'
import Footer from './pages/footer/Footer';

function App() {
 

  return (
    <>
     
      <MainHeader />
      <Routes> 
        <Route path='/' element={<Sale />} />
        <Route path='Sale' element={<Sale />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
