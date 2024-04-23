import { useEffect } from 'react'; // React library
import { useDispatch, useSelector } from 'react-redux'; // Redux library

// Custom component
import Header from '../../components/layout/header/Header';
import HeaderMobile from '../../components/layout/header/HeaderMobile';
import HeaderMobile2 from '../../components/layout/header/HeaderMobile2';
import HeadHeader from '../../components/layout/topHeader/HeadHeader';

// Redux Slice
import { checkScreenSize } from '../../hook/mobileSizeSlices';


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