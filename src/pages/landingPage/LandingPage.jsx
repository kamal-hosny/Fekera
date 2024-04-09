import React from 'react'


// ? Swiper
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const LandingPage = () => {
    return (
        <section> 
            <div className='container md:w-4/5 w-full mx-auto py-2 px-4 flex justify-center'>
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
                        <img src="https://btech.com/media/homecontent/banner/2/3/2368x800_web_banners_en.jpg" className='w-full h-full object-cover' alt="aa" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://btech.com/media/homecontent/banner/2/3/2368x800_en.jpg" className='w-full h-full object-cover' alt="as" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://btech.com/media/homecontent/banner/b/a/babyliss_eid_en_166.png" className='w-full h-full object-cover' alt="ad" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default LandingPage