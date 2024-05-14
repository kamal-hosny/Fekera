import { Rating } from "@mui/material";
import React from "react";

const Reviews = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row ">
      <div className="show-command w-full">
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
      <div className="flex gap-2">
        <button className="bg-red-500 p-2">Write A Review</button>
        <button className="bg-red-500 p-2">Ask A Question</button>
      </div>
    </div>
  );
};

export default Reviews;
