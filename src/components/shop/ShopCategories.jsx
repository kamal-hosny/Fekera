import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import SelectType from "./SelectType";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, Rating } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const ShopCategories = () => {
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
        <div className="main-filter">
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
      </div>

      <div
        className={` overflow-y-auto p-4  bg-mainColorBackground fixed flex flex-col items-end gap-2 top-0 border-borderColor border-s-2 h-screen transition-all duration-300  ${
          showFilter ? "end-0 w-dvw md:w-2/6" : "w-0 border-s-0 -end-full"
        } z-[51]`}
      >
        <div
          className="icon cursor-pointer mb-2 text-colorText2 hover:text-red-500 transition-all flex justify-center items-center"
          onClick={toggleFilter}
        >
          <CloseIcon />
        </div>

        <Accordion
          sx={{
            width: "100%",
            background: "var(--section-color-css)",
            color: "var(--color-text-2-css)",
            boxShadow: "none",
            border: "1px solid var(--color-border-css)",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "var(--color-text-2-css)" }} />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Availability
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                  All
                </label>
              </div>
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                  In Stock
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                  Out Of Stock
                </label>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {/*  */}
        <Accordion
          sx={{
            width: "100%",
            background: "var(--section-color-css)",
            color: "var(--color-text-2-css)",
            boxShadow: "none",
            border: "1px solid var(--color-border-css)",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "var(--color-text-2-css)" }} />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Filter By Price
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                  All
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                  $0 - $199
                </label>
              </div>
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                  $200 - $399
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                  $400 - $599
                </label>
              </div>
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                  $600 - $799
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                  Over $799
                </label>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {/*  */}
        <Accordion
          sx={{
            width: "100%",
            background: "var(--section-color-css)",
            color: "var(--color-text-2-css)",
            boxShadow: "none",
            border: "1px solid var(--color-border-css)",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "var(--color-text-2-css)" }} />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Ratings
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                  All
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                <Rating name="read-only" value={5} readOnly />
                </label>
              </div>
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                <Rating name="read-only" value={4} readOnly />
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                <Rating name="read-only" value={3} readOnly />
                </label>
              </div>
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                <Rating name="read-only" value={2} readOnly />
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                <Rating name="read-only" value={1} readOnly />
                </label>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {/*  */}
        <Accordion
          sx={{
            width: "100%",
            background: "var(--section-color-css)",
            color: "var(--color-text-2-css)",
            boxShadow: "none",
            border: "1px solid var(--color-border-css)",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "var(--color-text-2-css)" }} />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Sizes
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                  All
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                XXXL
                </label>
              </div>
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                XXL
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                XL
                </label>
              </div>
              <div className="flex items-center gap-1 cu">
                <input
                  id="inStock"
                  className="border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="inStock" className="text-colorText2 ">
                L
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                M
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  id="outOfStock"
                  className=" border-white-400/20  scale-100 transition-all duration-500 ease-in-out  hover:scale-110  checked:scale-100 w-4 h-4"
                  type="checkbox"
                />
                <label htmlFor="outOfStock" className="text-colorText2 ">
                S
                </label>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      {showFilter && (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="fixed left-0 top-0 h-[100%] w-[100%] z-[50] flex"
          onClick={toggleFilter}
        ></div>
      )}
    </>
  );
};

export default ShopCategories;
