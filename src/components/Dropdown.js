import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();


  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}>
        {option.label}
      </div>
    );
  });


  return <div ref={divEl} className="relative">
    <div
      className="flex justify-between items-center cursor-pointer panel-div"
      onClick={handleClick}
    >
      {value?.label || 'Select...'}
      <GoChevronDown className="text-lg" />
    </div>

    {isOpen && (
      <div className="absolute top-full panel-div">
        {renderedOptions}
      </div>
    )}
  </div>
};

export default Dropdown;