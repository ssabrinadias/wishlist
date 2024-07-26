import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="mt-2 text-gray-600">
          Desculpe, tivemos um erro por aqui!
        </p>
        <Link href="/">
          <a className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Tentar novamente
          </a>
        </Link>
      </div>
    </div>
  );
}
