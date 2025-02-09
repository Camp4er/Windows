import React, { useState } from "react";
import SearchMenu from "./SearchMenu";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Search Button */}
      <div
        className="flex items-center justify-center rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/icons/search-dark.svg"
          alt="Search icon"
          width={30}
          height={30}
        />
      </div>

      {/* Search Menu Popup */}
      {isOpen && <SearchMenu closeMenu={() => setIsOpen(false)} />}
    </div>
  );
};

export default SearchButton;
