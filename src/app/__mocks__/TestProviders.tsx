import { ProductProvider } from '@/context/ProductContext';
import { IProduct } from '@/interfaces/products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';

interface TestProvidersProps {
  children: ReactNode;
  initialProducts?: IProduct[];
}

const TestProviders: FC<TestProvidersProps> = ({
  children,
  initialProducts = [],
}) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider initialProducts={initialProducts}>
        {children}
      </ProductProvider>
    </QueryClientProvider>
  );
};

export default TestProviders;
