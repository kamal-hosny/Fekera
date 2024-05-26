import React from 'react'; 
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const highlight = ["specialoffers", "topsellers", "latestproducts"];

const MainTitle = ({ title }) => {
  const result = title.replace(" ", "").toLowerCase();
  const language = useSelector(state => state.languageSlice.result);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <style type="text/css">{`
          .main-title-underline {
            position: relative;
            margin-bottom: 10px;
          }
          .main-title-underline::before {
            content: "";
            position: absolute;
            bottom: -6px;
            ${language ? "left: 0;" : "right: 0;"}
            width: 40%;
            height: 2.5px;
            background-color: var(--color-text-2-css);
            transition: 0.3s ease-in-out;
          }
          .main-title-underline:hover::before {
            width: 100%;
            background-color: var(--color-text-hover-css);
          }

          .main-title .main-title-icon{
            font-size: 30px;
            border-radius: 50%;
            border:1px solid var(--color-text-2-css) ;
            color: var(--color-text-2-css);
            transition: 0.3s;
        }
        .main-title .main-title-icon:hover{
            border:1px solid var(--color-text-1-css) ;
            color: var(--color-text-1-css);
        }
        `}</style>
      </Helmet>
      <div className='main-title text-center py-4 flex justify-between'>
        <Link to={`/shop/${result}`}>
          <p className='font-medium text-colorText2 hover:text-colorText1 transition-all leading-10'>{t(title)}</p>
        </Link>
        {highlight.includes(result) && (
          <div className='flex items-center gap-4'>
            <Link className='main-title-underline block font-medium' to={`/shop/${result}`}>
              {t("Show more")}
            </Link>
            <div className='flex items-center gap-2' style={{direction: "ltr"}}>
              <KeyboardArrowLeftIcon 

                className={`cursor-pointer right-arrow-${result} main-title-icon`} 
              />
              <KeyboardArrowRightIcon 
  
                className={`cursor-pointer left-arrow-${result} main-title-icon`} 
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainTitle;
