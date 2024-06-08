import React, { useState } from "react";

// icon
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSearch } from "../../reduxToolkit/showSearchSlice";
import CloseIcon from "@mui/icons-material/Close";

const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const dispatch = useDispatch();
  const toggleSearch = () => {
    dispatch(setOpenSearch());
  };
  const searchValue = useSelector((state) => {
    return state.showSearchSlice.result;
  });
  console.log(searchValue);

  return (
    <>
      {searchValue && (
        <div className="flex flex-col bg-sectionColor fixed rounded-md left-[50%] top-[20%] overflow-hidden -translate-x-[50%] w-11/12 md:w-3/4 lg:w-[500px] z-[51]">
          <div className="search-bar flex items-center justify-center border-b-[1px] border-borderColor">
            <div className="icon-s bg-[#aabbcb] hover:bg-[#1d2731] cursor-pointer transition-all p-1 h-[50px] w-[50px] flex items-center justify-center">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={searchInputValue}
              placeholder="Enter the search word"
              onChange={(e) => setSearchInputValue(e.target.value)}
              className="w-full h-[50px] p-1 px-2 text-colorText1 bg-sectionColor focus:outline-none"
            />
            <div
              onClick={() => {
                setSearchInputValue("");
              }}
              className="icon-s h-[50px] w-[50px] flex items-center justify-center px-4 cursor-pointer transition-all text-colorText2 hover:text-red-500"
            >
              <CloseIcon />
            </div>
          </div>
          <ul className="">
            <li className="flex gap-4 transition-all cursor-pointer py-2 hover:bg-mainColorBackground px-4 items-center">
              <div className="image h-14 w-16 rounded-md overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://loobek-be87.kxcdn.com/loobek/wp-content/uploads/2022/09/25.jpg"
                  alt="sd"
                />
              </div>
              <div className="info">
                <p>asddsadasdasd</p> <div className="price flex items-center gap-2">
                <span className="text-colorText1">$343</span>
                <del className="text-colorText2">$200</del>
                </div>
              </div>
            </li>
            <li className="flex gap-4 transition-all cursor-pointer py-2 hover:bg-mainColorBackground px-4 items-center">
              <div className="image h-14 w-16 rounded-md overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://loobek-be87.kxcdn.com/loobek/wp-content/uploads/2022/09/52.jpg"
                  alt="sd"
                />
              </div>
              <div className="info">
                <p>asddsadasdasd</p> <div className="price flex items-center gap-2">
                <span className="text-colorText1">$343</span>
                <del className="text-colorText2">$200</del>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
      {searchValue && (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="fixed left-0 top-0 h-full w-full z-[50] flex"
          onClick={toggleSearch}
        ></div>
      )}
    </>
  );
};

export default Search;
