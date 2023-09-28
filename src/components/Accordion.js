import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;


    const icon = <span className="text-2xl">
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>

    return (
      <div key={item.id}>
        <div className="flex justify-between p-3 shadow-md bg-gray-50 border items-center cursor-pointer hover:bg-blue-200 max-w-lg"
          onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border rounded max-w-lg">
    {renderedItems}
  </div>;
}

export default Accordion;