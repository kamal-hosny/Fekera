import React from 'react'; // React library
import { Link } from 'react-router-dom'; // React Router library

// Icons MUI (Material-UI) library
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';  
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';  
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';  
import ManageSearchIcon from '@mui/icons-material/ManageSearch';  
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';  
import { useTranslation } from 'react-i18next';

const navheader = [
    {
        id: 1,
        name: "Home",
        icon: <HomeRoundedIcon />,
        link: "/"
    },
    {
        id: 2,
        name: "Search",
        icon: <ManageSearchIcon />,
        link: "/"
    },
    {
        id: 3,
        name: "Cart",
        icon: <ShoppingCartIcon />,
        link: "/cart",
        count: true
    },
    {
        id: 4,
        name: "Wishes",
        icon: <FavoriteBorderIcon />,
        link: "/wishlist",
        count: true
    },
    {
        id: 5,
        name: "Login",
        icon: <PersonOutlineIcon />,
        link: "/login"
    },
];

const HeaderMobile2 = () => {
    const { t } = useTranslation(); 
    return (
        <div className='bg-mainColorBackground shadow fixed bottom-0 left-0 z-10 w-full'>
            <div className="container mx-auto px-4 py-1">
                <ul className='flex justify-between'>
                    {navheader.map((item) => (
                        <Link to={item.link} key={item.id} className='flex flex-col items-center justify-center p-3 gap-1 text-sm'>
                            <button className='relative'>
                                {item.count && (
                                    <span key={`count-${item.id}`} className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-slate-50 bg-red-600 h-4 w-4 rounded-full text-xs">1</span>
                                )}
                                {item.icon}
                            </button>
                            <p>{t(item.name)}</p>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HeaderMobile2;
