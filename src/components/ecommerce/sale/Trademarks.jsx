import MainTitle from '../../common/MainTitle'; // Custom MainTitle component

// Swiper
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules'; // Swiper modules
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper React components

// Import Swiper styles
import { Link } from 'react-router-dom'; // React Router library
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Swiper navigation styles
import 'swiper/css/pagination'; // Swiper pagination styles


const brandmarks =[
    {
        id: 1 ,
        name: "adidas",
        image: "/images/brand mark/adidas.webp"
    },
    {
        id: 2 ,
        name: "giorgio armani",
        image: "/images/brand mark/giorgio armani.png"
    },
    {
        id: 3 ,
        name: "h&m",
        image: "/images/brand mark/h&m.webp"
    },
    {
        id: 4 ,
        name: "nike jordan",
        image: "/images/brand mark/nike jordan.webp"
    },
    {
        id: 5 ,
        name: "nike",
        image: "/images/brand mark/nike.webp"
    },
    {
        id: 6 ,
        name: "puma",
        image: "/images/brand mark/puma.webp"
    },
    {
        id: 7 ,
        name: "tommy",
        image: "/images/brand mark/tommy.webp"
    },
    {
        id: 8 ,
        name: "zara",
        image: "/images/brand mark/zara.webp"
    },
]

const Trademarks = () => {
    return (
        <div className="  bg-mainColorBackground my-4 p-4 rounded-md">
            <MainTitle title="Trade Marks" />
            <Swiper
    
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                    991: {
                      slidesPerView: 8,
                    },
                    768: {
                      slidesPerView: 6,
                    },
                    576: {
                      slidesPerView: 5,
                    },

                  }}
                className="mySwiper  rounded-md"
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                style={{ direction: "rtl" }}
            >
                {brandmarks.map((x)=>(
                    <SwiperSlide key={x.id} className='my-8'>
                       <Link to={x.name}>
                       <img src={x.image} className='w-full h-14 object-contain' alt="ad" />
                       </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Trademarks