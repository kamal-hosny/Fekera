import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Reviews from "./Reviews";
import SizeShape from "./SizeShape";
import AdditionalInformation from "./AdditionalInformation";
import Description from "./Description";

const ProjectDescription = () => {
  const [active, setActive] = useState(0);

  const mineLink = [
    "Description",
    "Additional information",
    "Size & Shape",
    "Reviews (0)",
  ];

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <>
      <Helmet>
        <style type="text/css">
          {`
                    .ProjectDescription .active {
                        color: var(--color-text-1-css);
                    }
                `}
        </style>
      </Helmet>
      <div className="flex flex-col gap-14 border-b-2 border-borderColor py-4">
        <div className="ProjectDescription mt-8 mb-3 border-b-2 border-borderColor py-4">
          <ul className="flex gap-5 font-semibold flex-wrap">
            {mineLink.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer text-colorText2 ${
                  active === index ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {active === 0 && (
        <Description />
        )}
        {active === 1 && (
          <AdditionalInformation />
        )}
        {active === 2 && (
          <SizeShape />
        )}
        {active === 3 && (
          <Reviews />

        )}
      </div>
    </>
  );
};

export default ProjectDescription;
