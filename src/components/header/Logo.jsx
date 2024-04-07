import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Logo = () => {
  const [imageSrc, setImageSrc] = useState("");
  const resultState = useSelector((state) => state.darkMode.result);
  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    const getImageSrc = () => {
      if (resultState === "light") {
        return lng === "en" ? "/images/logo-b.png" : "/images/logo-b-ar.png";
      } else {
        return lng === "en" ? "/images/logo-w.png" : "/images/logo-w-ar.png";
      }
    };

    setImageSrc(getImageSrc());
  }, [resultState, lng]);

  return (
    <div className='cursor-pointer overflow-hidden'>
      <Link to="/" className='cursor-pointer'>
        <img className="scale-[1.3]" width={90} src={imageSrc} alt='logo' />
      </Link>
    </div>
  );
};

export default Logo;
