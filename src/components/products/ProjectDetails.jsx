import Timer from '../../components/ecommerce/sale/Timer'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Button } from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RedeemIcon from '@mui/icons-material/Redeem';


const ProjectDetails = () => {
  const [counter, setCounter] = useState(0)
  const [statusLove, setStatusLove] = useState(false);

  const handleCounterChange = (event) => {
    setCounter(event.target.value)
  }

  const handleIncrement = (event) => {
    setCounter((x)=> x + 1)
  }
  const handleDecrement = (event) => {
    if(counter > 0) {
      setCounter((x)=> x - 1)
    }
  }

  return (
    <>
          <Helmet>
        <style type="text/css">{`
        
.project-details .quantity {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: end;
}
.project-details .quantity:focus {
  outline: 10px solid #000;
}
.project-details .quantity .counter {
  display: flex;
}
.project-details .quantity .input-counter {
  width: 40px;
  height: 50px ;
  padding: 3px;
  background-color: #f0f0f0;
  
}
.project-details .quantity .input-counter:focus {
  outline: none;
}
.project-details .quantity .counter span {
  width: 30px ; 
  height: 50px ;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  cursor: pointer;
}
.project-details .quantity .Add-to-cart {
  width: 100%;
}
.project-details .quantity .Add-to-cart .button {
  background-color: black;
  width: 100%;
  height: 50px;
  font-size: 1rem;
}
.project-details .quantity .Add-to-cart .button:hover {
  background-color: #c2185b;
}
        `}
        </style>
      </Helmet>
    
    <div className='project-details'>
      <div className="title flex flex-col gap-2 ">
      <h4 className='text-sm text-colorText2'>Sportwear</h4>
      <h3 className='text-lg text-colorText1'>Topshop training t-shart</h3>
      <div className='flex gap-2 text-colorText2'>
        <span className='text-sm'>0 Reviews</span>
        <span className='text-[13px] underline'>Write a review</span>
      </div>
      </div>
      <div>
      <div className="price flex items-center gap-3 border-b-2 border-borderColor py-4">
        <div className="new-price text-[#c6203a] text-[30px] font-semibold">
          $21.00
        </div>
        <del className="old-price text-colorText2 text-[30px]">
          $40.00
        </del>
        <div className="discounted text-[#c6203a] p-1 rounded-sm"
        style={{background: "rgba(198, 32, 57, 0.2)"}}>
          -47%
        </div>
        <div className='text-[#c6203a] text-sm'>
          <Timer duration={2 * 24 * 60 * 60 * 1000} size="small" />
        </div>
      </div>
      <div className="quantity border-b-2 border-borderColor py-4">
        <div>
          <h4 className='mb-[10px] text-colorText2'>Quantity</h4>
          <div className="counter text-black">
            <span onClick={handleDecrement}>-</span>
            <input className='input-counter text-center' type="text" value={counter} onChange={handleCounterChange} />
            <span onClick={handleIncrement}>+</span>
          </div>
        </div>
        <div className="Add-to-cart">
        <Button variant="contained" className='button' > + Add to cart</Button>
        </div>
      </div>
      <div className="more">
        <div className={`wislist flex gap-2 py-1 my-1 cursor-pointer ${statusLove === false ? "text-colorText2": "text-red-500"}`} onClick={() => { setStatusLove(!statusLove) }}>
          <div className="icon">
            <FavoriteBorderIcon />
          </div>
          <span>Add to wishlist</span>
        </div>
      </div>
      <div className="icons text-colorText2 flex gap-2 border-b-2 border-borderColor py-4">
        <div className="icon cursor-pointer">
          <LinkedInIcon /> 
        </div>
        <div className="icon cursor-pointer">
          <FacebookIcon />
        </div>
        <div className="icon cursor-pointer">
          <XIcon />
        </div>
        <div className="icon cursor-pointer">
          <PinterestIcon />
        </div>
        <div className="icon cursor-pointer">
          <InstagramIcon />
        </div>
      </div>
      <div className='features flex justify-between bg-mainColor p-4 rounded-md my-4 text-white text-sm'>
        <div className="slice flex gap-3 leading-5 items-center">
          <LocalShippingIcon />
          <p>Free shipping <br/>
          for orders over $200</p>
        </div>
        <div className="slice flex gap-3 items-center ">
          <RedeemIcon />
          <p>
            Free gift wrapping
          </p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default ProjectDetails