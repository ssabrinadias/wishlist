import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="max-w-1132px mx-auto mt-8 p-4">
      <h2 className="text-2xl font-semibold mb-4">Home</h2>
      <div className="border-t border-gray-300 my-4"></div>
      {children}
    </main>
  );
};

export default Container;
