import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation, initReactI18next } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MegaMenu2 = ({ myLinks }) => {
    const { t } = useTranslation()
    const [arrow, setArrow] = useState(false); // State to track arrow rotation

    return (
        <div className='nav-arrow relative cursor-pointer flex py-3 ' onMouseEnter={() => { setArrow(true) }} onMouseLeave={() => { setArrow(false) }} >
            {myLinks.links !== null && (
                <KeyboardArrowDownIcon className={` ${arrow ? "rotate-180 text-lime-700  " : ""}`} />
            )}

            {myLinks.links === null ? (
                <Link to={myLinks.name} className={arrow ? "text-hoverColorText " : ""}>
                    {t(myLinks.name)}
                </Link>
            ) : (
                <div>
                    <span className={arrow ? "text-hoverColorText transition" : ""}>{t(myLinks.name)}</span>
                    {arrow && (
                        <ul className=' z-[5] top-12 right-1 bg-mainColorBackground ps-10 rounded-md w-max py-2 shadow'>
                            {myLinks.links.map((x, index) => (
                                <Link to={x} key={index} className='flex items-center justify-end gap-3 pe-2 py-1  hover:text-hoverColorText'>
                                    <li className={'hover:-translate-x-3 p-2 transition'}>
                                        {t(x)}
                                    </li>|
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default MegaMenu2;
