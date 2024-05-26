import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LandingPage from "../../components/ecommerce/sale/LandingPage";
import ProductsSection from "../../components/ecommerce/sale/ProductsSection";
import SeasonOffers from "../../components/ecommerce/sale/SeasonOffers";
import ShopByDepartment from "../../components/ecommerce/sale/ShopByDepartment";
import Trademarks from "../../components/ecommerce/sale/Trademarks";
import WhyFekera from "../../components/ecommerce/sale/WhyFekera";
import { latestProducts, specialOffers, topSellers } from "../../reduxToolkit/sale/saleSlice";
import { ColorRing } from "react-loader-spinner";

const Sale = () => {
  const dispatch = useDispatch();
  
  const {
    specialOffersData,
    specialOffersLoading,
    topSellersData,
    topSellersLoading,
    latestProductsData,
    latestProductsLoading,
  } = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(specialOffers());
    dispatch(topSellers());
    dispatch(latestProducts());
  }, [dispatch]);

  return (
    <div className="sale container md:w-4/5 w-full mx-auto">
      <LandingPage />
      <ShopByDepartment />
      {specialOffersLoading ? (
        <div className="flex w-full justify-center m-4">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : (
        <ProductsSection name="Special Offers" data={specialOffersData} />
      )}
      <SeasonOffers />
      {topSellersLoading ? (
        <div className="flex w-full justify-center m-4">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : (
        <ProductsSection name="Top Sellers" data={topSellersData} />
      )}
      <Trademarks />
      <WhyFekera />
      {latestProductsLoading ? (
        <div className="flex w-full justify-center m-4">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : (
        <ProductsSection name="Latest Products" data={latestProductsData} />
      )}
    </div>
  );
};

export default Sale;
