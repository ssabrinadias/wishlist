const MenuDropdown = () => {
  return (
    <div className="relative group">
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Entrar
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Minha Conta
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Endereços
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Minha Netshoes
        </a>
      </div>
    </div>
  );
};

export default MenuDropdown;
