import ShopByDepartment from '../../components/sale/ShopByDepartment'
import LandingPage from '../../components/sale/LandingPage'
import React from 'react'
import WhyFekera from '../../components/sale/WhyFekera'

const Sale = () => {
  return (
    <div className='container md:w-4/5 w-full mx-auto'>
    <LandingPage />
    <ShopByDepartment />
    <WhyFekera />
    </div>
  )
}

export default Sale