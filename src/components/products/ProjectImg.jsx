import React, { useRef, useState } from 'react'

// Swiper
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules'; // Swiper modules
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper React components

// Import Swiper styles
import 'swiper/css'; // Swiper core styles
import 'swiper/css/pagination';



const ProjectImg = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    console.log(sliderIndex)

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

  return (
    <div className='flex gap-4 md:flex-row flex-row-reverse '>
        <div className='smailImg flex flex-col gap-2'>
            <div className="image w-[80px] h-[105px]">
                <img className='w-full h-full object-cover' src="https://i.pinimg.com/564x/b2/06/36/b20636380e384e389a58a879802932f1.jpg"  alt="" />
            </div>
            <div className="image w-[80px] h-[105px]">
                <img className='w-full h-full object-cover' src="https://i.pinimg.com/564x/b2/06/36/b20636380e384e389a58a879802932f1.jpg" alt="" />
            </div>
            <div className="image w-[80px] h-[105px]">
                <img className='w-full h-full object-cover' src="https://i.pinimg.com/564x/b2/06/36/b20636380e384e389a58a879802932f1.jpg" alt="" />
            </div>
            <div className="image w-[80px] h-[105px]">
                <img className='w-full h-full object-cover' src="https://i.pinimg.com/564x/b2/06/36/b20636380e384e389a58a879802932f1.jpg" alt="" />
            </div>
            <div className="image w-[80px] h-[105px]">
                <img className='w-full h-full object-cover' src="https://i.pinimg.com/236x/43/a5/4f/43a54ff539023a61275e33e03388aecd.jpg" alt="" />
            </div>
        </div>





        <div className='bigImg'>
        <Swiper
          pagination={{
            dynamicBullets: true,
        }}
        modules={[Autoplay]}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper w-80 rounded-md"
        onSlideChange={(swiper) => setSliderIndex(swiper.activeIndex)}
        loop={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        style={{direction: "rtl"}}
        >
        <SwiperSlide className='className="image  w-5/6 h-3/4"'>
        <img className='w-full h-full object-cover'  src="https://loobek-be87.kxcdn.com/loobek/wp-content/uploads/2022/09/73.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='className="image  w-5/6 h-3/4"'>
        <img className='w-full h-full object-cover'  src="https://i.pinimg.com/236x/43/a5/4f/43a54ff539023a61275e33e03388aecd.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='className="image  w-5/6 h-3/4"'>
        <img className='w-full h-full object-cover'  src="https://i.pinimg.com/236x/43/a5/4f/43a54ff539023a61275e33e03388aecd.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='className="image  w-5/6 h-3/4"'>
        <img className='w-full h-full object-cover'  src="https://i.pinimg.com/236x/43/a5/4f/43a54ff539023a61275e33e03388aecd.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='className="image  w-5/6 h-3/4"'>
        <img className='w-full h-full object-cover'  src="https://i.pinimg.com/236x/43/a5/4f/43a54ff539023a61275e33e03388aecd.jpg" alt="" />
        </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default ProjectImg