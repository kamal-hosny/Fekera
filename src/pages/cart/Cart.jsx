import React, { useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { Helmet } from "react-helmet-async";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import FormatCurrency from "../../util/FormatCurrency";
import { useSelector } from "react-redux";

const Cart = () => {
  const [counter, setCounter] = useState(0);

  const mobileSize = useSelector((state) => state.mobileSize.result);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const handleCounterChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCounter(value);
    }
  };

  let totalProduct = (price) => {
    return FormatCurrency(price * counter);
  };

  return (
    <>
      <Helmet>
        <style type="text/css">{`
          .cart .closeIcon {
            transition: 0.3s;
            font-size: 25px;
            cursor: pointer;
          }
          .cart .closeIcon:hover {
            color: #c2185b;
          }
          .cart .btn-coupon-code, .cart .btn-checkout {
            box-shadow: none;
            border-radius: 0;
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
            background-color: var(--main-color-css);
            height: 100%;
            transition: 0.3s all;
          }
          .cart .btn-coupon-code:hover, .cart .btn-checkout:hover {
            background-color: var(--color-text-hover-css);
          }
        `}</style>
      </Helmet>
      <div className="container md:w-4/5 w-full mx-auto flex flex-col gap-4 my-4 px-2">
        <BreadCrumbs />
        <div className="cart flex flex-col gap-6 md:gap-2">
          {mobileSize ? (
            <div className=" flex flex-col gap-2 w-[95%]  self-center">
              <div className="relative cart-card flex gap-2 border-[1px] border-borderColor p-1">


              <div className="delete flex justify-center items-center w-6 h-6 absolute -top-3 -right-3 bg-red-600 rounded-full hover:bg-colorText1 transition-all">
                    <CloseIcon className="closeIcon" style={{fontSize: "18px"}} />
                  </div>


                <div className="image">
                <img
                      className="w-[80px] h-[110px] object-cover"
                      src="https://i.pinimg.com/236x/e1/ea/0f/e1ea0f41f40c365c769564be9e2c4292.jpg"
                      alt="Denim shorts with rips"
                    />
                </div>
                <div className="info">
                  <p className="text-sm font-medium">
                      Denim shorts with rips
                  </p>
                  

                  <div className="text-xs font-semibold flex flex-row gap-1 text ">
                    <del className="price-old text-colorText2">
                      {FormatCurrency(100)}
                    </del>
                    <span className="price-new text-[#18c226]">
                      {FormatCurrency(50)}
                    </span>
                  </div>

                  <div className="counter text-black flex gap-1 justify-start items-center">
                    <span
                      onClick={handleDecrement}
                      className="text-xl p-1 cursor-pointer text-colorText2 hover:text-colorText1 transition-all"
                    >
                      -
                    </span>
                    <input
                      className="input-counter text-center w-7 h-7 bg-colorText2 text-white rounded-sm"
                      type="text"
                      value={counter}
                      onChange={handleCounterChange}
                    />
                    <span
                      onClick={handleIncrement}
                      className="text-xl p-1 cursor-pointer text-colorText2 hover:text-colorText1 transition-all"
                    >
                      +
                    </span>
                  </div>
                  <div className="total text-xs font-semibold">
                  <span>TotalPrice :</span>
                    <span>{totalProduct(200)}</span>
                  </div>

                </div>
              </div>
            </div>
          ) : (
            <div className="cart-products border-y-2 border-borderColor">
              <div>
                <div className="grid grid-cols-7 gap-4 border-b-2 border-borderColor py-4 text-center">
                  <div className="col-span-3">Product</div>
                  <div>Quantity</div>
                  <div>Price</div>
                  <div>Total</div>
                  <div>Remove</div>
                </div>

                <div className="Product-products grid grid-cols-7 border-b-2 border-borderColor items-center pt-2 pb-4">
                  <div className="col-span-3 flex items-center gap-4">
                    <img
                      className="w-[80px] h-[110px] object-cover"
                      src="https://i.pinimg.com/236x/e1/ea/0f/e1ea0f41f40c365c769564be9e2c4292.jpg"
                      alt="Denim shorts with rips"
                    />
                    <p className="text-sm font-medium">
                      Denim shorts with rips
                    </p>
                  </div>

                  <div className="counter text-black flex gap-1 justify-center">
                    <span
                      onClick={handleDecrement}
                      className="text-xl p-1 cursor-pointer text-colorText2 hover:text-colorText1 transition-all"
                    >
                      -
                    </span>
                    <input
                      className="input-counter text-center w-10 bg-colorText2 text-white rounded-sm"
                      type="text"
                      value={counter}
                      onChange={handleCounterChange}
                    />
                    <span
                      onClick={handleIncrement}
                      className="text-xl p-1 cursor-pointer text-colorText2 hover:text-colorText1 transition-all"
                    >
                      +
                    </span>
                  </div>

                  <div className="text-xs font-semibold flex flex-col-reverse gap-1 text-center">
                    <span className="price-new text-[#18c226]">
                      {FormatCurrency(50)}
                    </span>
                    <del className="price-old text-colorText2">
                      {FormatCurrency(100)}
                    </del>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs font-semibold justify-center">
                    {totalProduct(200)}
                  </div>
                  <div className="delete flex justify-center w-full">
                    <CloseIcon className="closeIcon" />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="cart-bottom flex md:justify-between justify-center flex-col gap-2 md:flex-row   ">
            <div className="coupon bg-mainColorBackground p-4 rounded-sm flex flex-col gap-3 border-[1px] border-borderColor h-fit w-[384px] md:w-fit self-center sm:self-start">
              <p className="text-sm">Apply coupon to get discount!</p>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="h-full p-2 rounded-s-sm focus:outline-borderColor"
                />
                <Button variant="contained" className="btn-coupon-code">
                  APPLY
                </Button>
              </div>
            </div>

            <div className="pricing bg-mainColorBackground p-4 rounded-sm flex flex-col gap-3  border-[1px] border-borderColor w-[384px] md:w-96 self-center sm:self-start">
              <div className="flex flex-col gap-3">
                <p className="text-sm">Summary</p>
                <ul className="price-pricing flex flex-col gap-1 text-xs border-y-[1px] border-borderColor py-3">
                  <li className="flex justify-between">
                    <span className="text-colorText2">SUBTOTAL</span>
                    <span>{FormatCurrency(50)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-colorText2">Shipping</span>
                    <span>{FormatCurrency(50)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-colorText2">Sales Tax</span>
                    <span>{FormatCurrency(50)}</span>
                  </li>
                </ul>
                <div className="flex justify-between text-sm">
                  <span className="text-colorText2">ESTIMATED TOTAL</span>
                  <span>{FormatCurrency(50)}</span>
                </div>
                <Button variant="contained" className="btn-checkout">
                  CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
