import React from 'react'

const AdditionalInformation = () => {
  return (
    <div>
    <ul>
        <li className="border-b-2 border-borderColor py-4 flex justify-between">
            <span>Size clothes</span>
            <span className="font-semibold">XS, M, L, XL, XXL</span>
        </li>
        <li className=" py-4 flex justify-between">
            <span>Fabric</span>
            <span className="font-semibold">Denim</span>
        </li>
    </ul>
</div>
  )
}

export default AdditionalInformation