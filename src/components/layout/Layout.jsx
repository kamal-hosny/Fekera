import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../pages/footer/Footer";
import MainHeader from "../../pages/header/MainHeader";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../reduxToolkit/menuSlice";
import ScrollToTop from "../../util/ScrollToTop";

const Layout = () => {
    const dispatch = useDispatch();
    const menuValue = useSelector((state) => {
        return state.menuSlice.result;
    });

    const toggleMenu = () => {
        dispatch(setMenu());
    };

    return (
        <>
            {menuValue && (
                <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className="fixed h-full w-full z-[15]"
                    onClick={toggleMenu}
                ></div>
            )}
            <MainHeader />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Layout;
