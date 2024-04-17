import { Link } from "react-router-dom";
import MainTitle from "../MainTitle";
import React from "react";
import { useTranslation } from "react-i18next";



const Departments = [
    {
        id: 1,
        name: "T-shirts",
        image: "/images/product/categories/T-shirts & Vests.webp",
        link: "T-shirts & Vests"
    },
    {
        id: 2,
        name: "Hoodies",
        image: "/images/product/categories/Hoodies & Sweatshirts.webp",
        link: "Hoodies & Sweatshirts"
    },
    {
        id: 3,
        name: "Jeans",
        image: "/images/product/categories/Jeans.jpeg",
        link: "Jeans"
    },
    {
        id: 4,
        name: "Suits",
        image: "/images/product/categories/Suits.webp",
        link: "Suits"
    },
    {
        id: 5,
        name: "Shoes",
        image: "/images/product/categories/Shoes & Sneakers.webp",
        link: "Shoes"
    },
    {
        id: 6,
        name: "Sportswear",
        image: "/images/product/categories/Sportswear.webp",
        link: "Sportswear"
    },
];

const ShopByDepartment = () => {
    const { t } = useTranslation()


    return (
        
        <div>
            <MainTitle title={"Shop by department"} />
            <div className="flex justify-center xl:justify-evenly gap-3">
                {Departments.map((x)=>(
                    <Link to={x.link} key={x.id} className=" flex flex-col  items-center gap-2">
                        <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-28 md:w-28 xl:h-40 xl:w-40 "><img className="w-full h-full object-cover rounded-xl bg-bottom" src={x.image} alt={x.name} />
                        </div>
                        <p className="text-xs text-colorText2">{t(x.name)}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ShopByDepartment;
