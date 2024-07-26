import Image from 'next/image';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import netshoesLogo from '../../../../public/netshoes-logo-2048x261.png';

const Header = () => {
  return (
    <header className="bg-purple-700 flex justify-between items-center max-w-full mx-auto w-full h-12 sm:h-[60px] xl:h-[90px]">
      <main className="flex justify-between max-w-1132px mx-auto w-full">
        <div className="flex items-center">
          <Image src={netshoesLogo} alt="Netshoes Logo" width={200} />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-white">
            <FaHeart className="mr-2" />
            <span>Wishlist</span>
          </div>
          <div className="relative group">
            <FaUserCircle className="text-white h-8 w-8" />
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
