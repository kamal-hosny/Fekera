import ShopByDepartment from '../../components/sale/ShopByDepartment'
import LandingPage from '../../components/sale/LandingPage'
import React from 'react'
import WhyFekera from '../../components/sale/WhyFekera'
import Trademarks from '../../components/sale/Trademarks'
import SeasonOffers from '../../components/sale/SeasonOffers'

const Sale = () => {
  return (
    <div className='container md:w-4/5 w-full mx-auto'>
    <LandingPage />
    <ShopByDepartment />
    <WhyFekera />
    <Trademarks />
    <SeasonOffers />
    </div>
  )
}

export default Sale