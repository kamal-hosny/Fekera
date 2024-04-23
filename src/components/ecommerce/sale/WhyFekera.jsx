import MainTitle from "../../common/MainTitle"; // Custom MainTitle component

import { Helmet } from "react-helmet-async"; // React Helmet library

import { useTranslation } from "react-i18next"; // react-i18next library

import Cookies from "js-cookie"; // js-cookie library


const WhyFekera = () => {
  const lng = Cookies.get("i18next") || "en";
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <style type="text/css">{`
       .why-fekera h4{
            color: #0b0118;
            font-weight: 700;
            position: relative;
            z-index: 2;
        }
        .why-fekera ul p{
            color: #fcfdfc;
            font-weight: 500;
            position: relative;
            z-index: 2;
        }
              .why-fekera li {
                position: relative;
                background: #6695c9;
                padding: 16px;
                border-radius: 6px;
                width: calc(95% / 4);
                height: 250px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center
            }
            @media (max-width: 768px) {
                .why-fekera ul {
                    flex-wrap: wrap;
                    row-gap: 30px;
                }
                .why-fekera li {
                    width: calc(95% / 2);
                    height: 200px;
            ;
                }
            }
            
            `}</style>
      </Helmet>

      <div className=" why-fekera bg-mainColorBackground my-4 p-4 rounded-md">
        <MainTitle title="Why Fekera" />
        <ul className="flex justify-between w-full ">
          <li style={{ background: "#773ea2" }} className="gap-1 items-start">
            <span className="shape-1"></span>
            <span className="shape-2"></span>
            <span className="shape-3"></span>
            {lng === "en" ? (
              <>
                <p className="text-xl">Buy now and</p>
                <h4 className="text-4xl">PAY LATER</h4>
              </>
            ) : (
              <>
                <p className="text-xl">اشتري دبوقتى</p>
                <h4 className="text-4xl">و ادفع براحتك</h4>
              </>
            )}
          </li>
          <li
            style={{ background: "#6696c9" }}
            className=" items-center text-center"
          >
            {lng === "en" ? (
              <>
                <h4 className="text-4xl">CASH OFFER</h4>
                <p>with</p>
                <p className="text-2xl">Buy now and</p>
              </>
            ) : (
              <>
                <h4 className="text-4xl">
                  عروض <br />
                  الكاش
                </h4>
                <p className="text-2xl">باحسن سعر</p>
              </>
            )}
          </li>
          <li style={{ background: "#36ab82" }} className=" items-start">
            {lng === "en" ? (
              <>
                <p className="text-sm">Pick up from store in</p>
                <h4 className="text-3xl">2-HOURS</h4>
                <p className="text-xl">wherever you are</p>
              </>
            ) : (
              <>
                <p className="text-sm">استلام</p>
                <h4 className="text-3xl">خلال ساعتين</h4>
                <p className="text-xl">من اي مكان</p>
              </>
            )}

            <img className="w-24" src="/images/icons/time.png" alt="time" />
          </li>
          <li style={{ background: "#94ce7a" }} className=" items-center">
            {lng === "en" ? (
              <>
                <h4 className="text-4xl">
                  DAILY <br /> DEALS
                </h4>
                <p className="text-2xl">For You</p>
              </>
            ) : (
              <>
                <p className="text-4xl">
                  عروض <br /> كل يوم
                </p>
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhyFekera;
