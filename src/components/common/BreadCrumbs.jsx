import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Helmet } from "react-helmet-async";

const BreadCrumbs = () => {
    const location = useLocation();
    const { pathname } = location;

    const pathParts = pathname.split("/").filter((part) => part !== "");

    return (
        <>
            <Helmet>
                <style type="text/css">{`
                .breadCrumb .link:last-child {
                    pointer-events: none;
                }
    `}</style>
            </Helmet>
            <section className="breadCrumb text-sm p-2">
                <div className="breadCrumb-text flex items-center gap-1">
                    <Link to="/" className="cursor-pointer">
                        <span>Sale</span>
                    </Link>
                    {pathParts.map((part, index) => {
                        let result = part.charAt(0).toUpperCase() + part.slice(1);
                        return (
                            <React.Fragment key={index}>
                                <ArrowForwardIosIcon style={{ fontSize: "10px" }} />
                                <Link to={`/${part}`} className="cursor-pointer link">
                                    <span>{result}</span>
                                </Link>
                            </React.Fragment>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default BreadCrumbs;
