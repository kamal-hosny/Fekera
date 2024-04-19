import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FormatCurrency from "../scripts/FormatCurrency";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ item }) => {
    const [buttonText, setButtonText] = useState(false);
    const [statusLove, setStatusLove] = useState(false);

    // Original price before discount
    const originalPrice = item.price;
    // Percentage discount
    const discountPercentage = item.discount;

    // Calculating the discounted price
    const discountedPrice = Math.floor(
        originalPrice - originalPrice * (discountPercentage / 100)
    );



    return (
        <div>
            <div className="image relative bg-mainColorBackground">
                <div className="p-1 absolute bg-red w-full z-[2] flex justify-between items-center">
                    <div className="icon bg-sectionColor h-7 w-7 flex items-center justify-center rounded-full border-[1px] border-borderColor" onClick={()=> {setStatusLove(!statusLove)}}>
                        {statusLove === false ? (<FavoriteBorderIcon
                            className="text-colorText2 cursor-pointer"
                            style={{ fontSize: "18px" }}
                        />) : (
                            <FavoriteIcon
                                className="text-red-500 cursor-pointer"
                                style={{ fontSize: "18px" }}
                            />
                        )}

                    </div>
                    <div className="status">
                        <p
                            className="p-1 rounded-sm text-sm text-white"
                            style={{ background: item.status.color }}
                        >
                            {item.status.name}
                        </p>
                    </div>
                </div>
                <Link to="./">
                    <div className="overflow-hidden w-full h-[300px] xl:h-[350px]">
                    <img className=" w-full h-full object-cover hover:scale-105 transition-all" src={item.image} alt="" /> 
                    </div>
                    </Link>
            </div>
            <div className="info p-2 flex flex-col gap-2">
                <div className="name-info">
                    <Link to="./">
                        <h2 className="text-colorText1 hover:text-hoverColorText text-lg">
                            {item.name}
                        </h2>
                    </Link>
                    <p className="text-colorText2">{item.description}</p>
                </div>
                <div className="price">
                    {item.status.name === "discount" ? (
                        <>
                            <div className="new-price text-colorText1">
                                {FormatCurrency(discountedPrice)}
                            </div>
                            <div className="olg-price flex gap-2 items-center">
                                <del className="text-colorText2">
                                    {FormatCurrency(item.price)}
                                </del>
                                <span className="text-green-500">
                                    discount {item.discount}%
                                </span>
                            </div>
                        </>
                    ) : (
                        <><div className="price text-colorText1">
                            {FormatCurrency(item.price)}
                        </div>
                            <div className="opacity-0" >hidden</div>
                        </>
                    )}
                </div>
            </div>
            <div
                onMouseEnter={() => setButtonText(true)}
                onMouseLeave={() => setButtonText(false)}
            >
                <Button
                    variant="contained"
                    style={{
                        color: "#fff",
                        background: "#1a72dd",
                        boxShadow: "none",
                        marginTop: "10px",
                    }}
                    className="relative w-full "
                >
                    {buttonText === false ? "Add to cart" : <AddShoppingCartIcon />}
                </Button>
            </div>
        </div>
    );
};

export default Card;
