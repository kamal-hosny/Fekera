import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import 'swiper/css';

const smallImages = [
    {
        img: "https://sigmafiteg.com/cdn/shop/files/magenta-reg-fit-t-574622_460x.jpg?v=1711323261"
    },
    {
        img: "https://sigmafiteg.com/cdn/shop/files/magenta-reg-fit-t-904258_460x.jpg?v=1711323261"
    },
    {
        img: "https://sigmafiteg.com/cdn/shop/files/magenta-reg-fit-t-588172_460x.jpg?v=1711323262"
    },
    {
        img: "https://sigmafiteg.com/cdn/shop/files/magenta-reg-fit-t-597305_460x.jpg?v=1711323262"
    },
    {
        img: "https://sigmafiteg.com/cdn/shop/files/magenta-reg-fit-t-796605_460x.jpg?v=1711323262"
    },
];

const ProjectImg = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0});
    const [imageSelected, setImageSelected] = useState(smallImages[0]);

    const handleMouseHover = (e) => {
        const { left, top, width, height} = e.currentTarget.getBoundingClientRect();

        // Calculate the position (x, y)
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setPosition({x, y});

        // Update cursorPosition
        setCursorPosition({x: e.pageX - left, y: e.pageY - top});
    };

    return (
        <>
            <Helmet>
                <style type="text/css">{`
                    .projectImg .smallImg .image {
                        filter: grayscale(90%);
                    }
                    .projectImg .smallImg .image.selected {
                        border: 3px solid var(--color-text-1-css);
                        filter: grayscale(0);
                    }
                    .manifier-image {
                        width: 200px;
                        height: 200px;
                        background-repeat: no-repeat;
                        border: 2px solid #000;
                        display: ${showMagnifier ? 'block' : 'none'};
                    }


                `}</style>
            </Helmet>

            <div className='projectImg flex gap-4 sm:flex-row flex-col-reverse'>
                <div className='smallImg flex sm:flex-col gap-2 flex-row'>
                    {smallImages.map((image, index) => (
                        <div 
                            key={index} 
                            className={`image md:w-[80px] w-[60px] md:h-[130px] h-[90px] ${image === imageSelected ? 'selected' : ''}`}
                            onClick={() => setImageSelected(image)}
                        >
                            <img className='w-full h-full object-cover cursor-pointer' src={image.img} alt="" />
                        </div>
                    ))}
                </div>
                <div className='bigImg md:cursor-none overflow-hidden'>
                    <div className="image h-[100%] md:h-[100%] w-full lg:max-w-[550px] sm:h-[600px] relative"
                        onMouseEnter={() => setShowMagnifier(true)}
                        onMouseLeave={() => setShowMagnifier(false)}
                        onMouseMove={handleMouseHover}
                    >
                        <img className="w-full h-full object-cover" src={imageSelected.img} alt="" />
                        <span className='absolute bg-red-500 top-2 left-2 py-1 px-3 text-white'>-44%</span>

                        <div style={{position: "absolute", left: `${cursorPosition.x - 100}px`, top: `${cursorPosition.y - 100}px`, pointerEvents: "none", cursor: "none" }} className='hidden md:block' >
                            <div className='manifier-image'
                                 style={{
                                    backgroundImage: `url(${imageSelected.img})`,
                                    backgroundPosition: `${position.x}% ${position.y}%`
                                 }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectImg;
