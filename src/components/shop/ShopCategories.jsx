import React, { useEffect, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import SelectType from "./SelectType";
import CloseIcon from "@mui/icons-material/Close";
import FilterAccordion from "./FilterAccordion";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import Card from "../../components/common/Card";
import { useDispatch, useSelector } from "react-redux";
import { topSellers } from "../../reduxToolkit/sale/saleSlice";

const ShopCategories = () => {
  const dispatch = useDispatch()
  const { topSellersData } = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(topSellers());
  },[dispatch])

  const [showFilter, setShowFilter] = useState(false);

  const [valueSlider, setValueSlider] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValueSlider(newValue);
  };

  const handleInputChange = (index, event) => {
    const newValue = [...valueSlider];
    newValue[index] =
      event.target.value === "" ? "" : Number(event.target.value);
    setValueSlider(newValue);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div className="shop-categories flex flex-col gap-2">
        <div className="shop-title flex justify-between items-center">
          <p className="text-3xl font-medium">Shop</p>
          <div
            className="text-sm flex gap-1 items-center text-colorText2 cursor-pointer transition-all hover:text-hoverColorText"
            onClick={toggleFilter}
            aria-expanded={showFilter}
          >
            <TuneIcon style={{ fontSize: "18px" }} /> <p>Show filters</p>
          </div>
        </div>
        <div className="main-filter flex justify-between items-center mb-4">
          <div className="products-type flex gap-2 items-center">
            <SelectType
              name="Sort by"
              Types={[
                "latest",
                "special offers",
                "top sellers",
                "price: low to high",
                "price: high to low",
              ]}
            />
            <SelectType name="Show" Types={["20", "40", "60", "80"]} />
          </div>
        </div>
        
          <div className="grid-row grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {topSellersData.map((x) => (
            <>
            <Card key={x.id} item={x} />
            </>
          ))}
          </div>
      
      </div>

      <div
        className={`overflow-y-auto p-4 bg-mainColorBackground fixed flex flex-col items-end gap-2 top-0 border-borderColor border-s-2 h-screen transition-all duration-300 ${showFilter ? "end-0 w-dvw md:w-2/6" : "w-0 border-s-0 -end-full"} z-[51]`}
      >
        <div
          className="icon cursor-pointer mb-2 text-colorText2 hover:text-red-500 transition-all flex justify-center items-center"
          onClick={toggleFilter}
        >
          <CloseIcon />
        </div>

        <FilterAccordion name={"Availability"} choices={["All", "In Stock", "Out Of Stock"]} />
        <FilterAccordion name={"Filter By Price"} choices={["All", "$0 - $199", "$200 - $399", "$400 - $599", "$600 - $799", "Over $799"]} />
        <FilterAccordion name={"Ratings"} choices={["All", "5", "4", "3", "2", "1"]} />
        <FilterAccordion name={"Sizes"} choices={["All", "XXXL", "XXL", "XL", "L", "M", "S"]} />
      </div>

      {showFilter && (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="fixed left-0 top-0 h-full w-full z-[50] flex"
          onClick={toggleFilter}
        ></div>
      )}
    </>
  );
};

export default ShopCategories;
