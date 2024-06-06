import { Button } from "@mui/material";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import React from "react";

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import FormatCurrency from "../../util/FormatCurrency";

const Wishlist = () => {

    const mobileSize = useSelector(state => state.mobileSize.result);
    return (
        <>
            <Helmet>
                <style type="text/css">{`
    .wishlist .button {
        background-color: black;
        font-size: 0.5rem;
        border-radius: 0;
        }
        .wishlist .button:hover {
        background-color: #c2185b;
        }
        `}
                </style>
            </Helmet>
            <div className="wishlist">
                <div className="container md:w-4/5 w-full mx-auto flex flex-col gap-6">
                    <BreadCrumbs />
                    {mobileSize ? (
                        <div className="m-4 mt-0" >
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="card">
                                    <div className="image relative">
                                        <div className="delete absolute top-0 right-0 bg-mainColorBackground h-6 w-6 flex items-center justify-center hover:bg-colorText1 hover:text-mainColorBackground transition-all">
                                            <CloseIcon style={{ fontSize: '15px', cursor: "pointer" }} />
                                        </div>
                                        <img src="https://i.pinimg.com/236x/e1/ea/0f/e1ea0f41f40c365c769564be9e2c4292.jpg" alt="" />
                                    </div>
                                    <div className="info py-1">
                                        <h3 className="card-title">
                                            ssssssssssssssssssssss
                                        </h3>
                                        <div className="price text-xs font-semibold flex  border-b-2 border-borderColor flex-col pb-2">
                                            <del className="price-old text-colorText2">{FormatCurrency(100)}</del>
                                            <span className="price-new text-[#18c226]">{FormatCurrency(50)}</span>
                                        </div>
                                    </div>
                                    <div className="card-footer flex flex-col gap-2">
                                        <div className="state flex justify-between items-center text-xs">
                                            <span className="text-colorText2">Stock:</span>
                                            <span>In Stock</span>
                                        </div>
                                        <Button variant="contained" className='button' style={{ width: "100%" }}> Add to cart</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                    <div className="mb-8 ">
                        <div className="grid grid-cols-7 gap-4 border-b-2 border-borderColor py-4 ">
                            <div className="col-span-4 ">Product name</div>
                            <div>Unit price</div>
                            <div>Stock status</div>
                            <div></div>
                        </div>

                        <div className="Product-wishlist grid grid-cols-7  border-b-2 border-borderColor items-center pt-2 pb-4">
                            <div className="col-span-4 flex  items-center gap-4">
                                <img
                                    className="w-[80px] h-[110px] object-cover"
                                    src="https://i.pinimg.com/236x/e1/ea/0f/e1ea0f41f40c365c769564be9e2c4292.jpg"
                                    alt=""
                                />
                                <p className="text-sm font-medium">Denim shorts with rips</p>
                            </div>
                            <div className="text-xs font-semibold flex gap-1 flex-col">
                            <del className="price-old text-colorText2">{FormatCurrency(100)}</del>
                                <span className="price-new text-[#18c226]">{FormatCurrency(50)}</span>
                            </div>
                            <div className="flex items-center gap-0.5 text-xs font-semibold"> <span><CheckIcon style={{ fontSize: '13px' }} /></span> <span>In Stock</span></div>
                            <div className="flex justify-between items-center">
                                <Button variant="contained" className='button'> Add to cart</Button>
                                <div className="delete">
                                    <CloseIcon style={{ fontSize: '15px', cursor: "pointer" }} />
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>

        </>
    );
};

export default Wishlist;
