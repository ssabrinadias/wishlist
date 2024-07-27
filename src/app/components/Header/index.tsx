'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import netshoesLogo from '../../../../public/netshoes-logo-2048x261.png';
import MenuDropdown from '../MenuDropDown';

const Header = () => {
  return (
    <header className="bg-purple-700 flex justify-between items-center max-w-full mx-auto w-full h-12 sm:h-[60px] xl:h-[90px]">
      <div className="hidden xl:flex justify-between max-w-1132px mx-auto w-full">
        <Link href="/" className="mr-20">
          <div className="flex items-center">
            <Image
              src={netshoesLogo}
              alt="Netshoes Logo"
              width={200}
              height={25.5}
            />
          </div>
        </Link>

        <div className="flex items-center space-x-4 mr-7">
          <Link href="/wishlist" className="mr-20" data-id="wishlist-link">
            <div className="flex items-center text-white">
              <FaHeart className="mr-2" />
              <span>Wishlist</span>
            </div>
          </Link>
          <div className="relative group">
            <FaUserCircle className="text-white h-8 w-8" />
            <MenuDropdown />
          </div>
        </div>
      </div>
      <div className="flex xl:hidden justify-between w-full px-4">
        <FaUserCircle className="text-white h-8 w-8" />
        <Link href="/">
          <div className="flex-1 flex justify-center min-h-[150]">
            <Image
              src={netshoesLogo}
              alt="Netshoes Logo"
              width={150}
              height={19.5}
            />
          </div>
        </Link>
        <Link href="/wishlist" className="mr-20">
          <FaHeart className="text-white h-8 w-8" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
