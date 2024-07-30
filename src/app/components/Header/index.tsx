'use client';

import Image from 'next/image';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import netshoesLogo from '../../../../public/netshoes-logo-2048x261.png';
import MenuDropdown from '../MenuDropDown';

const Header = () => {
  const handleNavigation = (url: string) => {
    window.location.href = url;
  };

  const logo = (device: string) => {
    const isMobile = device === 'mobile';
    return (
      <Image
        src={netshoesLogo}
        alt="Netshoes Logo"
        width={isMobile ? 150 : 200}
        height={isMobile ? 19.5 : 25.2}
      />
    );
  };

  const mobileView = (
    <div className="flex xl:hidden justify-between w-full px-4">
      <FaUserCircle className="text-white h-8 w-8" />
      <div className="flex-1 flex justify-center ">
        <button onClick={() => handleNavigation('/')}>{logo('desktop')}</button>
      </div>
      <div
        className="cursor-pointer "
        onClick={() => handleNavigation('/wishlist')}
      >
        <FaHeart className="text-white h-8 w-8" />
      </div>
    </div>
  );

  const desktopView = (
    <div className="hidden xl:flex justify-between max-w-1132px mx-auto w-full">
      <div
        className="mr-20 cursor-pointer"
        onClick={() => handleNavigation('/')}
      >
        <button className="flex items-center">{logo('desktop')}</button>
      </div>

      <div className="flex items-center space-x-4 mr-7">
        <div
          className="mr-20 flex items-center text-white cursor-pointer"
          onClick={() => handleNavigation('/wishlist')}
          data-id="wishlist-link"
        >
          <FaHeart className="mr-2" />
          <span>Wishlist</span>
        </div>
        <div className="relative group">
          <FaUserCircle className="text-white h-8 w-8" />
          <MenuDropdown />
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-purple-700 flex justify-between items-center max-w-full mx-auto w-full h-12 sm:h-[60px] xl:h-[90px]">
      {desktopView}
      {mobileView}
    </header>
  );
};

export default Header;
