import React from 'react'

const Description = () => {
  return (
    <div className="flex justify-between lg:gap-4 gap-8 text-[14px] flex-col">
    <div className="flex-1 flex flex-col gap-4">
      <h4 className="text-colorText1 text-[20px] leading-7">
        With the new fashion trends and all the available shopping
        options you can order your clothes online and make money without
        even leaving your house.
      </h4>
      <p className="text-colorText2">
        These days you can take your own inspiration and create
        something new for yourself. All you need to do is read books and
        magazines about fashion, watch videos on youtube, keep yourself
        updated on social media, and of course also shop online!
      </p>
    </div>
    <div className="flex-1 flex flex-col gap-4">
      <h2 className="text-[20px]">Material & Washing</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h4 className="text-colorText2">Material:</h4>
          <p className="text-colorText1">
            80% polyamide, 20% elastane
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-colorText2 ">Top part material:</h4>
          <p className="text-colorText1"> 87% polyester, 13% elastan</p>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-colorText2">Structure</h4>
          <p className="text-colorText1">Mesh, jersey</p>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-colorText2">Care instructions</h4>
          <p className="text-colorText1">
            Machine wash at 40 ° C, do not tumble dry, Dry clean
            allowed, Machine wash on gentle cycle
          </p>
        </div>
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-4">
      <h2 className="text-[20px]">Size & Shape</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center ">
          <h4 className="text-colorText2">Modek height:</h4>
          <p className="text-colorText1">
            Our model is 186 cm tall and is wearing size
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-colorText2 ">Length</h4>
          <p className="text-colorText1">Short</p>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-colorText2">Inner leg length</h4>
          <p className="text-colorText1">27 cm (Size M)</p>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-colorText2">Outer leg length</h4>
          <p className="text-colorText1">44 cm (Size M)</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Description