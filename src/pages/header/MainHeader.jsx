import { useEffect } from 'react'; // React library
import { useDispatch, useSelector } from 'react-redux'; // Redux library

// Custom component
import Header from '../../components/header/Header'; 
import HeaderMobile from '../../components/header/HeaderMobile'; 
import HeaderMobile2 from '../../components/header/HeaderMobile2';
import HeadHeader from '../../components/topHeader/HeadHeader';

// Redux Slice
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
      {mobileSize ? (<><HeaderMobile /><HeaderMobile2 /></>) : (<Header />)}
    </header>
  )
}

export default MainHeader