import React from 'react'

const SizeShape = () => {
  return (
    <div className="box-grid flex flex-col gap-4"> 
    <div className="grid grid-cols-9 md:grid-cols-10 gap-4 text-colorText2 border-b-2 border-borderColor">
    <div className="col-span-2 md:col-span-3">Size</div>
    <div>XS</div>
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
    <div>XXL</div>
    <div>3XL</div>
    </div>
    <div className="grid grid-cols-9 md:grid-cols-10 gap-4 border-b-2 border-borderColor">
    <div className="col-span-2 md:col-span-3 text-colorText2">Chest</div>
    <div>82</div>
    <div>88</div>
    <div>94</div>
    <div>100</div>
    <div>106</div>
    <div>114</div>
    <div>118</div>
    </div>
    <div className="grid grid-cols-9 md:grid-cols-10 gap-4 border-b-2 border-borderColor">
    <div className="col-span-2 md:col-span-3 text-colorText2">Waist</div>
    <div>64</div>
    <div>70</div>
    <div>76</div>
    <div>82</div>
    <div>88</div>
    <div>94</div>
    <div>100</div>
    </div>
    <div className="grid grid-cols-9 md:grid-cols-10 gap-4 border-b-2 border-borderColor">
    <div className="col-span-2 md:col-span-3 text-colorText2">Seat</div>
    <div>82</div>
    <div>88</div>
    <div>94</div>
    <div>100</div>
    <div>106</div>
    <div>114</div>
    <div>120</div>
    </div>
    <div className="grid grid-cols-9 md:grid-cols-10 gap-4 border-b-2 border-borderColor">
    <div className="col-span-2 md:col-span-3 text-colorText2">Shoulders</div>
    <div>71</div>
    <div>72</div>
    <div>74</div>
    <div>75</div>
    <div>77</div>
    <div>79</div>
    <div>82</div>
    </div>
    <div className="grid grid-cols-9 md:grid-cols-10 gap-4 border-b-2 border-borderColor">
    <div className="col-span-2 md:col-span-3 text-colorText2">Length</div>
    <div>164</div>
    <div>164</div>
    <div>170</div>
    <div>173</div>
    <div>176</div>
    <div>179</div>
    <div>182</div>
    </div>
    </div>
  )
}

export default SizeShape