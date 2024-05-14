import React from 'react'; // React library
import { useTranslation } from 'react-i18next'; // react-i18next library
import Timer from './Timer'; // Custom Timer component
import { Helmet } from 'react-helmet-async'; // React Helmet library
import { Button } from '@mui/material'; // MUI Button component
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // MUI ArrowForwardIcon component

const SeasonOffers = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <Helmet>
        <style type="text/css">{`

        `}
        </style>
      </Helmet>
      <div className='SeasonOffers relative bg-red my-4 py-4 rounded-md overflow-hidden h-auto' style={{direction: "ltr"}}>
        <img className='relative w-100 rounded-md' src="/images/Season Offers.png" alt="season" />
        <div className=' absolute text-white top-[50%] translate-y-[-50%]  md:left-[10%] left-2 flex flex-col gap-1 md:gap-2 '>
          <h4 className="relative font-bold text-xs md:text-xl">{t("Discounts 20%")}</h4>
          <h1 className="relative font-bold text-4xl md:text-7xl">{t("Season Offers")}</h1>
          <h5 className="relative text-xs md:text-xl">{t("Time Remaining for the Offer")}</h5>
          <Timer duration={2 * 24 * 60 * 60 * 1000} size={"big"} />
          <Button variant="contained" style={{ color: "black", background: "#fff", boxShadow: "none", marginTop: "10px" }} className="relative w-fit " endIcon={<ArrowForwardIcon />}>
          {t("Getting a discount")}
      </Button>
        </div>
    
      </div>
    </>
  );
};

export default SeasonOffers;
