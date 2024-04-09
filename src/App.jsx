import HeadHeader from './components/topHeader/HeadHeader';
import './App.css';
import Header from './components/header/Header';
import HeaderMobile from './components/header/HeaderMobile';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkScreenSize } from './Slices/mobileSizeSlices';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  const dispatch = useDispatch();
  const mobileSize = useSelector(state => state.mobileSize.result);


  useEffect(() => {
    dispatch(checkScreenSize());
  }, [dispatch]);

  return (
    <>
     
      <HeadHeader />
      {mobileSize ? <HeaderMobile /> : <Header />}
      <Routes> 
        <Route path='/' element={<LandingPage />} />
        <Route path='Sale' element={<LandingPage />} />
      </Routes>
    
    </>
  );
}

export default App;
