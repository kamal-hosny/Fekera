import React from 'react'
import MainTitle from "../MainTitle"

import { Helmet } from 'react-helmet-async';

import "./WhyFekera.css"

const WhyFekera = () => {
  return (
    <>
    <Helmet>
        <style type='text/css'>{`
        h4{
            color: #0b0118;
            font-weight: 700;
        }
        p{
            color: #fcfdfc;
            font-weight: 500;
        }
              li{
                background: #6695c9;
                padding: 16px;
              }
            `}</style>
    </Helmet>

    <div className='bg-mainColorBackground my-4 p-4 rounded-md' >
        <MainTitle title="Why Fekera" />
        <ul className='flex justify-between w-full '>
            <li style={{background: "#773ea2"}} className='gap-1 items-start' >
                <span className='shape-1'></span>
                <span className='shape-2'></span>
                <span className='shape-3'></span>
                <p className='text-xl'>Buy now and</p>
                <h4 className='text-4xl'>PAY LATER</h4>
            </li>
            <li style={{background: "#6696c9"}} className=' items-center'>
                <h4 className='text-4xl'>CASH <br/>OFFER</h4>
                <p>with</p>
                <p className='text-2xl'>Buy now and</p>
            </li>
            <li style={{background: "#36ab82"}} className=' items-start'>
                <p className='text-sm'>Pick up from store in</p>
                <h4 className='text-3xl'>2-HOURS</h4>
                <p className='text-xl'>wherever you are</p>
                <img className='w-24' src="/images/icons/time.png" alt="time" />
            </li>
            <li style={{background: "#94ce7a"}} className=' items-center'>
                <h4 className='text-4xl'>DAILY <br/> DEALS</h4>
                <p className='text-2xl'>For You</p>
            </li>
        </ul>
    </div>
    </>
  )
}

export default WhyFekera