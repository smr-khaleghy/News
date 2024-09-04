import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MenuItem = ({ item, isActive, onToggle }) => (
  <div className="mb-2">
    <button
      onClick={() => onToggle(item.name)}
      className="w-full py-2 px-4 hover:bg-gray-200 border-b border-b-gray-200 bg-gray-100 text-left flex justify-between items-center"
    >
      {item.name}
      {isActive ? <FaChevronUp /> : <FaChevronDown />}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isActive ? 'max-h-40' : 'max-h-0'
      }`}
    >
      <div className="bg-gray-100 p-2 ">
        {item.options.map((option, index) => (
          <label className="block mb-2 cursor-pointer" key={index}>
            <input type="checkbox" className="mr-2 cursor-pointer" />
            {option}
          </label>
        ))}
      </div>
    </div>
  </div>
);

export default MenuItem;
