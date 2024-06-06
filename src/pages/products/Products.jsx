import React from 'react'

import ProjectImg from '../../components/products/ProjectImg'
import BreadCrumbs from '../../components/common/BreadCrumbs'
import ProjectDetails from '../../components/products/ProjectDetails'
import ProjectDescription from '../../components/products/ProjectDescription'
import FormReviews from '../../components/products/FormReviews'

const Products = () => {
  return (
    <>
    <div className="container md:w-4/5 w-full mx-auto flex flex-col gap-4 my-4 px-2 mt-12">
      <BreadCrumbs/>
      <div className='flex justify-between md:flex-row flex-col gap-4 flex-wrap '>
      <ProjectImg />
      <ProjectDetails />
      </div>
      <ProjectDescription />
      <FormReviews />
    </div>
    </>
  )
}

export default Products