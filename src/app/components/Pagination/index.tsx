'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center mt-4 mb-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 mx-1 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
      >
        Anterior
      </button>
      <span className="px-2 py-1 mx-1">{`Página ${currentPage} de ${totalPages}`}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 mx-1 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
      >
        Próximo
      </button>
    </div>
  );
};

export default Pagination;
