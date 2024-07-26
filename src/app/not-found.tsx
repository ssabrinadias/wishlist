'use client';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8  text-center">
        <h2 className="text-2xl font-semibold mt-4">Página não encontrada</h2>
        <p className="mt-2 text-gray-600">
          Desculpe, a página que você está procurando não existe.
        </p>
      </div>
    </div>
  );
}
