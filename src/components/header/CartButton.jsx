import React from "react"; // React library

import { Link } from "react-router-dom";

// Icons from MUI (Material-UI) library
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet-async";
import {  useSelector } from "react-redux";

const CartButton = () => {
  const languageCurrent = useSelector((state) => {
    return state.languageSlice.result
});
const mobileSize = useSelector(state => state.mobileSize.result);

  return (
    <>
      <Helmet>
        <style type="text/css">
          {`
        .cartButton:hover .cart{
          opacity: 1;
          transition: opacity 0.3s;
          visibility: visible;
      }
      .cartButton .cart{
          opacity: 0;
          transition: opacity 0.3s;
          visibility: hidden;
      }          

      .cartButton .check-cart-button{
        color: #fff;
        background: #1d2731;
        box-shadow: none;
        margin-top: 10px;
        width: 100%;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .cartButton .check-cart-button:hover{
        background-color: var(--color-text-hover-css);
      }
        `}
        </style>
      </Helmet>

      <div className="cartButton cursor-pointer relative">
        <ShoppingCartIcon  />
        <div className={`cart absolute w-72 z-[2] top-10 border-borderColor border-2 bg-mainColorBackground shadow ${mobileSize? languageCurrent  ? "left-0" : "right-0" :  languageCurrent  ? "right-0" : "left-0"}`}>
          <div className=" p-3 headerCart flex justify-between   ">
            <div>
              <span>0</span> Items
            </div>
            <Link
              to="cart"
              className="hover:text-hoverColorText transition-all"
            >
              View Cart
            </Link>
          </div>
          <div className="bodyCart  p-1.5 flex justify-between gap-2 border-borderColor border-y-2 ">
            <div className="image overflow-hidden h-14 w-14">
              <img
                className="w-full h-full"
                src="https://images.asos-media.com/products/on-cloudswift-3-ad-all-day-trainers-in-frost-and-glacier/204529095-1-white?$n_320w$&wid=317&fit=constrain"
                alt=""
              />
            </div>
            <div className="info text-left w-2/3 ">
              <div className="text-xs">
                <h1 className="truncate">ON Cloudswift 3 AD trainers</h1>
                <p>Shoes</p>
              </div>
              <div className="text-sm price"> 35$</div>
            </div>
            <div className="icon-cart-button hover:text-red-600 transition-all">
              <ClearIcon style={{ fontSize: "1.5rem" }} />
            </div>
          </div>
          <div className="footerCart  p-3">
            <div className="totalPrice flex justify-between">
              <span>Total Price</span>
              <span>$2499.99</span>
            </div>
            <Button
              variant="contained"

              className=" check-cart-button"
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartButton;
