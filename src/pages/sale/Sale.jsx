import React from 'react'; // React library

// Custom component
import ShopByDepartment from '../../components/sale/ShopByDepartment'; 
import LandingPage from '../../components/sale/LandingPage'; 
import WhyFekera from '../../components/sale/WhyFekera'; 
import Trademarks from '../../components/sale/Trademarks'; 
import SeasonOffers from '../../components/sale/SeasonOffers'; 
import ProductsSection from '../../components/sale/ProductsSection';

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