import React, { useState } from 'react'

// Swiper
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules'; // Swiper modules
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper React components

// Import Swiper styles
import 'swiper/css'; // Swiper core styles
import { Helmet } from 'react-helmet-async';

const smallImages  = [
    {
        img: "https://i.pinimg.com/564x/69/53/f1/6953f1d3fc7970509fd376d656c945cf.jpg"
    },
    {
        img: "https://i.pinimg.com/736x/7b/84/85/7b8485033fa5e070934a18ac11fe15c8.jpg"
    },
    {
        img: "https://i.pinimg.com/564x/ac/0e/e2/ac0ee2fc81fc358edcfa337d3e9ae250.jpg"
    },
    {
        img: "https://i.pinimg.com/736x/41/e2/5d/41e25d840a911c6c25070ffc5da5cb04.jpg"
    },
    {
        img: "https://i.pinimg.com/564x/34/bc/10/34bc108854eae0caaae8e831a40dc931.jpg"
    },
]

const ProjectImg = () => {

    const [imageSelected, setImageSelected] = useState(smallImages[0]);

    return (
        <>
            <Helmet>
                <style type="text/css">{`
                .projectImg .smailImg .image:nth-child(${smallImages.indexOf(imageSelected) + 1}) {
                    border: 3px solid var(--color-text-1-css);
                }
        `}
                </style>
            </Helmet>

            <div className='projectImg flex gap-4 sm:flex-row flex-col-reverse '>
                <div className='smailImg flex sm:flex-col gap-2 flex-row'>
                    {smallImages .map((image, index) => (
                        <div key={index} className="image md:w-[80px] w-[60px] md:h-[130px] h-[90px]">
                            <img className='w-full h-full object-cover cursor-pointer' src={image.img} onClick={() => { setImageSelected(image) }} alt="" />
                        </div>
                    ))}
                </div>
                <div className='bigImg'>
                    <div className="image h-[100%] md:h-[100%] w-full sm:h-[600px]">
                        <img className="w-full h-full object-cover" src={imageSelected.img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectImg