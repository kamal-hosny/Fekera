import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormatCurrency from "../../util/FormatCurrency";
import { Helmet } from "react-helmet-async";

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
        <>
            <Helmet>
                <style type="text/css">{`
           .card .button-add-cart {
            --width: 100%;
            --height: 35px;
            --tooltip-height: 35px;
            --tooltip-width: 90px;
            --gap-between-tooltip-to-button: 18px;
            --button-color: #1a72dd;
            --tooltip-color: #fff;
            width: var(--width);
            height: var(--height);
            background: var(--button-color);
            position: relative;
            text-align: center;
            border-radius: 0.45em;
            font-family: "Arial";
            transition: background 0.3s;
          }
          
          
          
          .card .button-add-cart .text {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .card .button-add-cart .button-wrapper,.text,.icon {
            overflow: hidden;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            color: #fff;
          }
          
          .card .button-add-cart .text {
            top: 0
          }
          
          .card .button-add-cart .text,.icon {
            transition: top 0.5s;
          }
          
          .card .button-add-cart .icon {
            color: #fff;
            top: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .card .button-add-cart .icon svg {
            width: 24px;
            height: 24px;
          }
          
          .card .button-add-cart:hover {
            background: #222;
          }
          
          .card .button-add-cart:hover .text {
            top: -100%;
          }
          
          .card .button-add-cart:hover .icon {
            top: 0;
          }
              
            `}</style>
            </Helmet>
            <div className="card">
                <div className="image relative bg-mainColorBackground">
                    <div className="p-1 absolute bg-red w-full z-[2] flex justify-between items-center ">
                        <div className="icon bg-sectionColor  flex items-center justify-center rounded-full border-[1px] border-borderColor" style={{ width: "1.75rem", height: "1.75rem", padding: "1rem", margin: "0.25rem" }} onClick={() => { setStatusLove(!statusLove) }}>
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
                    <Link to={`/products/${item.id}`}>
                        <div className="overflow-hidden w-full h-[300px] xl:h-[350px]">
                            <img className=" w-full h-full object-cover hover:scale-105 transition-all" src={item.image} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="info p-2 flex flex-col gap-2">
                    <div className="name-info">
                        <Link to={`/products/${item.id}`}>
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
                                <div className="old-price flex gap-2 items-center">
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
                <div className="button-add-cart cursor-pointer">
                    <div className="button-wrapper">
                        <div className="text">Add to cart</div>
                        <span className="icon">
                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
