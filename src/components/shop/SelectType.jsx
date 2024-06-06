// SelectType.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const SelectType = ({ name, Types }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // الحصول على القيمة المبدئية من الرابط
  const params = new URLSearchParams(location.search);
  const initialType = params.get(name) || Types[0];
  const [selectedType, setSelectedType] = useState(initialType);

  useEffect(() => {
    // تحديث القيمة عند تغيير الرابط مباشرة
    const currentParams = new URLSearchParams(location.search);
    const currentType = currentParams.get(name);
    if (currentType && currentType !== selectedType) {
      setSelectedType(currentType);
    }
  }, [location.search, name, selectedType]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelect = (type) => {
    setSelectedType(type);
    setIsExpanded(false);

    // تحديث الرابط مع الفيلتر الجديد
    params.set(name, type);
    navigate({ search: params.toString() });
  };

  return (
    <div className="relative w-fit">
      <div className="flex items-center gap-1 cursor-pointer" onClick={toggleExpand}>
        <p className="text-colorText2">{name}</p>
        <div className='mx-1'>{selectedType}</div>
        <div className={`icon transition-all ${isExpanded ? "rotate-180" : ""}`}>
          <ExpandLessIcon />
        </div>
      </div>
      {isExpanded && (
        <ul className="absolute right-0 top-8 transition-all bg-mainColorBackground border-borderColor border-[1px] opacity-100 visible z-10 w-full">
          {Types.map((type) => (
            <li 
              key={type} 
              className='py-1 px-2 cursor-pointer transition-all hover:bg-hoverColorText hover:text-white' 
              onClick={() => handleSelect(type)}
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectType;
