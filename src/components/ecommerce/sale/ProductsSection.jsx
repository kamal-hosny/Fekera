import { Link } from "react-router-dom";
import storeItems from "../../../data/item.json";
import Card from "../../common/Card";
import MainTitle from "../../common/MainTitle";



// Swiper
// import Swiper core and required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // Swiper modules
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper React components

// Import Swiper styles
import "swiper/css"; // Swiper core styles
import "swiper/css/pagination"; // Swiper pagination styles
import "swiper/css/navigation"; // Swiper navigation styles
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";


const ProductsSection = ({ name, data }) => {
    const { t } = useTranslation()
    const result = name.replace(" ", "").toLowerCase()
    return (
    <>
      <Helmet>
        <style type="text/css">{`
            button.show {
                padding: 0.1em 0.25em;
                width: 13em;
                height: 4.2em;
                background-color: #212121;
                border: 0.08em solid #fff;
                border-radius: 0.3em;
                font-size: 12px;
                cursor: pointer;
              }
              
              button.show span {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                bottom: 0.4em;
                width: 8.25em;
                height: 2.5em;
                background-color: #212121;
                border-radius: 0.2em;
                font-size: 1.5em;
                color: #fff;
                border: 0.08em solid #fff;
                box-shadow: 0 0.4em 0.1em 0.019em #fff;
              }
              
              button.show span:hover {
                transition: all 0.5s;
                transform: translate(0, 0.4em);
                box-shadow: 0 0 0 0 #fff;
              }
              
              button.show span:not(hover) {
                transition: all 1s;
              }
              
            `}</style>
      </Helmet>
      <div className="ProductsSection my-4 p-4 rounded-md">

          <MainTitle title={`${name}`} />

          {data && data.length > 0 ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper rounded-md"
            loop={true}
            navigation={{
              nextEl: `.right-arrow-${result}`,
              prevEl: `.left-arrow-${result}`
            }}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            style={{ direction: "rtl" }}
            breakpoints={{
              991: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map((x) => (
              <SwiperSlide key={x.id}>
                <Card item={x} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-gray-500">
            {t('No products available')}
          </div>
        )}

        <div className="w-full flex justify-center my-8 items-center gap-4">

        </div>
      </div>
    </>
  );
};

export default ProductsSection;
