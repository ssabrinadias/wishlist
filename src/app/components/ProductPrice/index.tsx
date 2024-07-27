import React from 'react';

interface ProductPriceProps {
  salePriceInCents: string;
  fullPriceInCents: string;
  hasDiscount: boolean | '';
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  salePriceInCents,
  fullPriceInCents,
  hasDiscount,
}) => {
  const formatCurrency = (valueInCents: string) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(valueInCents) / 100);
  };

  return (
    <div className="flex flex-col mt-auto">
      {hasDiscount && (
        <span className="line-through text-gray-500 text-sm">
          {formatCurrency(fullPriceInCents)}
        </span>
      )}
      <span className="text-purple-600 text-base font-bold">
        {formatCurrency(salePriceInCents)}
      </span>
    </div>
  );
};

export default ProductPrice;
