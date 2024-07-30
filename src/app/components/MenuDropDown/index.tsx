import { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const MenuDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleUserIconClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group">
      <div className="relative group" onClick={handleUserIconClick}>
        <FaUserCircle className="text-white h-8 w-8 cursor-pointer" />
      </div>
      {isDropdownVisible && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
          ref={ref}
        >
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Entrar
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Minha Conta
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Endereços
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Minha Netshoes
          </a>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
