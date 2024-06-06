import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setShowForm } from '../../reduxToolkit/showFormSlice';
import CloseIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet-async';

const FormReviews = () => {

    const [rating, setRating] = useState(0);
    const dispatch = useDispatch()
    const showForm = useSelector((state) => state.showFormSlice.result);


  const toggleShow = () => {
    dispatch(setShowForm())
}
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      data.rating = rating;
      console.log("data", data);
    };
  

    
  return (
    <>
     <Helmet>
        <style type="text/css">{`
          ${showForm && `
            html {
              overflow: hidden;
            }
          `}
        `}</style>
      </Helmet>
    {showForm && (
        <>
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            className="fixed left-0 top-0 h-[100%] w-[100%] z-[200] flex"
            onClick={toggleShow}
          ></div>

          <div className="flex flex-col gap-6 bg-sectionColor fixed p-6 rounded-lg left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-11/12 md:w-3/4 lg:w-[500px] z-[201] border-borderColor border-2">
            <div className="flex items-center text-colorText2 w-full justify-between">
              <h3 className="font-medium">WRITE A REVIEW</h3>
              <CloseIcon
                onClick={toggleShow}
                className="cursor-pointer hover:text-red-500 transition-all"
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-reviews flex flex-col gap-4">
              {/* <div className="head flex-col sm:flex-row flex gap-4">
                <div className="name flex flex-col gap-1 flex-1">
                  <p>Name</p>
                  <input
                    type="text"
                    className="bg-mainColorBackground p-2 border-colorText2 border-[1px] focus:outline-hoverColorText"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                </div>
                <div className="email flex flex-col gap-1 flex-1">
                  <p>Email</p>
                  <input
                    type="email"
                    className="bg-mainColorBackground p-2 border-colorText2 border-[1px] focus:outline-hoverColorText"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                </div>
              </div> */}
              <div className="rating flex flex-col gap-1">
                <p>Rating</p>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </div>
              <div className="review flex flex-col gap-1">
                <p>Review</p>
                <textarea
                  {...register("review", { required: true })}
                  className="bg-mainColorBackground resize-none p-2 border-colorText2 border-[1px] focus:outline-hoverColorText"
                  placeholder="Write your comments here"
                />
                {errors.review && <span className="text-red-500 text-xs">Review is required</span>}
              </div>
              <div className="checkbox flex items-center gap-2 cursor-pointer text-colorText2">
                <Checkbox
                  {...register("recommend")}
                  className="border-white-400/20 scale-100 transition-all duration-500 ease-in-out hover:scale-110 checked:scale-100 w-4 h-4"
                  id="reviews-checkbox"
                />
                <label htmlFor="reviews-checkbox" className="text-xs">
                  Would you recommend this product?
                </label>
              </div>
              <Button className="w-fit btn" variant="outlined" type="submit">
                SUBMIT REVIEW
              </Button>
            </form>
          </div>
        </>
      )}
      </>
  )
}

export default FormReviews