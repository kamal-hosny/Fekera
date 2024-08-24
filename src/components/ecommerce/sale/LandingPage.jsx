import React from 'react'; // React library

// Swiper
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules'; // Swiper modules
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper React components

// Import Swiper styles
import 'swiper/css'; // Swiper core styles
import 'swiper/css/pagination'; // Swiper pagination styles
import 'swiper/css/navigation'; // Swiper navigation styles


const LandingPage = () => {
    return (
        <section> 
            <div className='py-14 px-4 flex justify-center'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper lg:h-[400px] rounded-md"
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    style={{direction: "rtl"}}
                >
                    <SwiperSlide>
                        <img src="/images/loadingPage/1.png" className='w-full h-full object-cover' alt="aa" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/loadingPage/2.png" className='w-full h-full object-cover' alt="as" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/loadingPage/3.png" className='w-full h-full object-cover' alt="ad" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default LandingPage