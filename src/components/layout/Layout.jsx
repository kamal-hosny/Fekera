import Footer from '../../pages/footer/Footer'
import MainHeader from '../../pages/header/MainHeader'
import React from 'react'
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout