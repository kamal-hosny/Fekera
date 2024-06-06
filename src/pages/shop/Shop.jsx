import React from 'react'
import ShopCategories from '../../components/shop/ShopCategories'
import BreadCrumbs from '../../components/common/BreadCrumbs'


const Shop = () => {
  return (
    <>
    <div className="container md:w-4/5 w-full mx-auto flex flex-col gap-4 my-4 px-2 ">
      <BreadCrumbs/>
      <ShopCategories />
      </div>
    </>
  )
}

export default Shop