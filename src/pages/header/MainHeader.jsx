import Header from '../../components/header/Header';
import HeaderMobile from '../../components/header/HeaderMobile';
import HeadHeader from '../../components/topHeader/HeadHeader';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkScreenSize } from '../../Slices/mobileSizeSlices';
import HeaderMobile2 from '../../components/header/HeaderMobile2';


const MainHeader = () => {

  const dispatch = useDispatch();
  const mobileSize = useSelector(state => state.mobileSize.result);


  useEffect(() => {
    dispatch(checkScreenSize());
  }, [dispatch]);

  return (
    <header>
      <HeadHeader />
      {mobileSize ? (<><HeaderMobile /><HeaderMobile2 /></>) : (<Header />)}
    </header>
  )
}

export default MainHeader