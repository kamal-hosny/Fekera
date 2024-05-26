import { Button, Rating, dividerClasses } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Swiper
// import Swiper core and required modules
import { Autoplay } from "swiper/modules"; // Swiper modules
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper React components

import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Swiper navigation styles
import "swiper/css/pagination"; // Swiper pagination styles
import { Helmet } from "react-helmet-async";

const Reviews = () => {
  const mobileSize = useSelector((state) => state.mobileSize.result);
  return (
    <>
        <Helmet>
        <style type="text/css">{`
              .Reviews .btn{
                padding: 8px 16px ;
                border-radius: 2px;
                background-color: var(--main-color-css);
                box-shadow: none;
                font-size: 12px;
              }
              .Reviews .btn:hover{
                background-color: var(--color-text-hover-css);
              }
            `}</style>
      </Helmet>
    <div className=" Reviews flex flex-col gap-5">
      <div className="flex justify-between flex-col md:flex-row gap-4 ">
        <div className="show-command w-full md:w-[45%]">
          <div className="head-show-command flex  flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-3xl">4.2</span>
              <span className="leading-4 font-semibold">
                Out of
                <br />5 Stars
              </span>
              <div className="show-rating">
                <Rating
                  sx={{ fontSize: 30 }}
                  name="half-rating-read"
                  defaultValue={4.2}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
            <div className="text-colorText2 mb-3">Based on 0 reviews</div>
          </div>
          <div className="body-show-command flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span>5 Stars</span>
              <div className="the-progress bg-colorText2 relative h-8 w-[80%] md-w-[50%] overflow-hidden">
                <span className="absolute left-0 top-0 h-full bg-mainColor transition w-[60%]"></span>
              </div>
              <span>230</span>
            </div>
            <div className="flex items-center gap-3">
              <span>4 Stars</span>
              <div className="the-progress bg-colorText2 relative h-8 w-[80%] md-w-[50%] overflow-hidden">
                <span className="absolute left-0 top-0 h-full bg-mainColor transition w-[15%]"></span>
              </div>
              <span>57</span>
            </div>
            <div className="flex items-center gap-3">
              <span>3 Stars</span>
              <div className="the-progress bg-colorText2 relative h-8 w-[80%] md-w-[50%] overflow-hidden">
                <span className="absolute left-0 top-0 h-full bg-mainColor transition w-[10%]"></span>
              </div>
              <span>30</span>
            </div>
            <div className="flex items-center gap-3">
              <span>2 Stars</span>
              <div className="the-progress bg-colorText2 relative h-8 w-[80%] md-w-[50%] overflow-hidden">
                <span className="absolute left-0 top-0 h-full bg-mainColor transition w-[5%]"></span>
              </div>
              <span>7</span>
            </div>
            <div className="flex items-center gap-3">
              <span>1 Stars</span>
              <div className="the-progress bg-colorText2 relative h-8 w-[80%] md-w-[50%] overflow-hidden">
                <span className="absolute left-0 top-0 h-full bg-mainColor transition w-[8%]"></span>
              </div>
              <span>23</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="head flex justify-between text-sm">
          <div className="font-semibold text-colorText2">Ratings (0)</div>
          <Button variant="contained" className="btn">Write A Review</Button>
        </div>

        {mobileSize ? (
          <div className="cards flex flex-col gap-2 my-5">
            <div className="card flex items-start gap-3  ">
              <div className="image w-12 h-12 rounded-full overflow-hidden">
                <img
                  className="object-cover"
                  src="https://i.pinimg.com/474x/84/ea/16/84ea16ee894dec1da7bc65364844cb27.jpg"
                  alt=""
                />
              </div>
              <div className="info w-full bg-mainColorBackground px-3 py-2 rounded-lg">
                <div className="info-head flex justify-between items-center ">
                  <p className="font-semibold">Kamal</p>
                  <p>3 days ago</p>
                </div>
                <div className="info-body pb-1">
                  <div className="stars">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div className="comment">i love you bro</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                991: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper  rounded-md"
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              <SwiperSlide className=" pt-8">
                <div className=" relative box  bg-mainColorBackground rounded-md  flex flex-col justify-center items-center ">
                    <div className="icon self-start opacity-50">
                    <FormatQuoteIcon fontSize="large" />
                    </div>
                    <div className="image w-12 h-12 rounded-full overflow-hidden absolute -top-6 left-1/2 -translate-x-1/2"><img className="object-cover" src="https://i.pinimg.com/474x/84/ea/16/84ea16ee894dec1da7bc65364844cb27.jpg" alt="" /></div>
                  <div className="info pt-2 pb-4">
                  <h3 className="text-center font-medium text-lg">name</h3>
                  <div className="stars ">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                    <p>الموقع جاامد يبرو</p>
                  </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Reviews;
