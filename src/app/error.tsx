'use client';

export default function ErrorBoundary() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8  text-center">
        <h2 className="text-2xl font-semibold mt-4">Ocorreu um erro</h2>
        <p className="mt-2 text-gray-600">
          Desculpe, algo deu errado. Por favor, tente novamente mais tarde.
        </p>
      </div>
    </div>
  );
}
