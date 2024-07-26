import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  title: string;
}

const Container: React.FC<ContainerProps> = ({ children, title }) => {
  return (
    <main className="max-w-1132px mx-auto mt-7 px-[30px] xl:px-0">
      <h1 className="font-semibold mb-6 text-customPurple">{title}</h1>
      <div className="border-t border-gray-300 my-4"></div>
      {children}
    </main>
  );
};

export default Container;
