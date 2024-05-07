import React from 'react'

import ProjectImg from '../../components/products/ProjectImg'
import BreadCrumbs from '../../components/products/BreadCrumbs'
import ProjectDetails from '../../components/products/ProjectDetails'

const Products = () => {
  return (
    <>
    <div className="container md:w-4/5 w-full mx-auto">
      <BreadCrumbs/>
      <div className='flex justify-between md:flex-row flex-col'>
      <ProjectImg />
      <ProjectDetails />
      </div>

    </div>
    </>
  )
}

export default Products