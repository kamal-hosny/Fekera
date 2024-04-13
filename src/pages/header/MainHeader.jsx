import Header from '../../components/header/Header';
import HeaderMobile from '../../components/header/HeaderMobile';
import HeadHeader from '../../components/topHeader/HeadHeader';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkScreenSize } from '../../Slices/mobileSizeSlices';


const MainHeader = () => {

  const dispatch = useDispatch();
  const mobileSize = useSelector(state => state.mobileSize.result);


  useEffect(() => {
    dispatch(checkScreenSize());
  }, [dispatch]);

  return (
    <header>
      <HeadHeader />
      {mobileSize ? <HeaderMobile /> : <Header />}
    </header>
  )
}

export default MainHeader