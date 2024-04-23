
// Custom component
import LandingPage from '../../components/ecommerce/sale/LandingPage';
import ProductsSection from '../../components/ecommerce/sale/ProductsSection';
import SeasonOffers from '../../components/ecommerce/sale/SeasonOffers';
import ShopByDepartment from '../../components/ecommerce/sale/ShopByDepartment';
import Trademarks from '../../components/ecommerce/sale/Trademarks';
import WhyFekera from '../../components/ecommerce/sale/WhyFekera';

const Sale = () => {
  return (
    <div className='container md:w-4/5 w-full mx-auto'>
    <LandingPage />
    <ShopByDepartment />
    <ProductsSection name="Special Offers" />
    <SeasonOffers />
    <ProductsSection name="Top Sellers" />
    <Trademarks />
    <WhyFekera />
    <ProductsSection name="Latest Products" />

    </div>
  )
}

export default Sale