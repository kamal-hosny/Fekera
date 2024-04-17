import React from 'react';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

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
        link: "/"
    },
    {
        id: 4,
        name: "Wishes",
        icon: <FavoriteBorderIcon />,
        link: "/"
    },
    {
        id: 5,
        name: "Login",
        icon: <PersonOutlineIcon />,
        link: "/"
    },
];

const HeaderMobile2 = () => {
    return (
        <div className='bg-mainColorBackground shadow fixed bottom-0 left-0 z-10 w-full'>
            <div className="container mx-auto px-4">
                <ul className='flex justify-between'>
                    {navheader.map((x) => (
                        <Link to={x.link} key={x.id} className='flex flex-col items-center justify-center p-3 gap-1 text-sm '>
                            {x.icon}
                            <p>{x.name}</p>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HeaderMobile2;
