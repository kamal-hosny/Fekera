import React from "react"; // React library
import { Link } from "react-router-dom"; // React Router library
import { useTranslation } from "react-i18next"; // react-i18next library
import MainTitle from "../MainTitle"; // Custom MainTitle component
import { Helmet } from "react-helmet-async";

const Departments = [
    {
        id: 1,
        name: "T-shirts",
        image: "/images/product/categories/T-shirts & Vests.webp",
        link: "T-shirts & Vests",
    },
    {
        id: 2,
        name: "Hoodies",
        image: "/images/product/categories/Hoodies & Sweatshirts.webp",
        link: "Hoodies & Sweatshirts",
    },
    {
        id: 3,
        name: "Jeans",
        image: "/images/product/categories/Jeans.jpeg",
        link: "Jeans",
    },
    {
        id: 4,
        name: "Suits",
        image: "/images/product/categories/Suits.webp",
        link: "Suits",
    },
    {
        id: 5,
        name: "Shoes",
        image: "/images/product/categories/Shoes & Sneakers.webp",
        link: "Shoes",
    },
    {
        id: 6,
        name: "Sportswear",
        image: "/images/product/categories/Sportswear.webp",
        link: "Sportswear",
    },
];

const ShopByDepartment = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <style type="text/css">{`
                .shop-by-department .image-container{
                    width: calc(93% / 6);
                    
                }
                .shop-by-department .image{
                    overflow: hidden;
                }
                
                .shop-by-department .image img {
                    height: 200px;;
                }
                @media (max-width: 1024px) {
                    .shop-by-department .image img {
                        height: 130px;;
                    }
                }
                @media (max-width: 768px) {
                    .shop-by-department .image img {
                        height: 100px;;
                    }
                }
                @media (max-width: 640px) {
                    .shop-by-department .image img {
                        min-height: 80px;
                    }
                }
                `}</style>
            </Helmet>
            <div className="shop-by-department">
                <MainTitle title={"Shop by department"} />
                <div className="flex justify-evenly ">
                    {Departments.map((x) => (
                        <Link
                            to={x.link}
                            key={x.id}
                            className=" flex flex-col items-center gap-2 image justify-evenly image-container"
                        >
                            <div className="image rounded-lg">
                                <img
                                    className="w-full grayscale hover:grayscale-0 hover:scale-105 transition-all  object-cover rounded-lg bg-bottom"
                                    src={x.image}
                                    alt={x.name}
                                />
                            </div>
                            <p className="text-[0.5rem] md:text-xs text-colorText2">{t(x.name)}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ShopByDepartment;
