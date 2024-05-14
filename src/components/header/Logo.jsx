import React, { useEffect, useState } from 'react'; // React library with hooks
import { useSelector } from 'react-redux'; // Redux library
import { Link } from 'react-router-dom'; // React Router library
import Cookies from 'js-cookie'; // js-cookie library

const Logo = () => {
  const [imageSrc, setImageSrc] = useState("");
  const resultState = useSelector((state) => state.darkMode.result);

  useEffect(() => {
    const getImageSrc = () => {
      if (resultState === "light") {
        return  "/images/logo-b-ar.png";
      } else {
        return  "/images/logo-w-ar.png";
      }
    };

    setImageSrc(getImageSrc());
  }, [resultState]);

  return (
    <div className='cursor-pointer overflow-hidden flex justify-center '>
      <Link to="/" className='cursor-pointer'>
        <img className="scale-[1.3]" width={90} src={imageSrc} alt='logo' />
      </Link>
    </div>
  );
};

export default Logo;
