import Container from './components/Container';
import Header from './components/Header';

const ProductSkeleton = () => {
  return (
    <>
      <Header />
      <Container title="Home">
        <div className="flex flex-wrap -mx-2 justify-center">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              className="m-5 px-2 mb-4 w-[220px] h-[295px] rounded-sm shadow bg-gray-200 animate-pulse"
              key={index}
            >
              <div className="relative w-full h-36 mt-2 bg-gray-300 rounded-sm"></div>
              <div className="px-1 py-4">
                <div className="h-4 bg-gray-300 rounded-sm mb-2"></div>
                <div className="flex items-center">
                  <div className="h-4 bg-gray-300 rounded-sm w-24"></div>
                </div>
                <div className="flex flex-col mt-2">
                  <div className="h-4 bg-gray-300 rounded-sm w-16 mb-1"></div>
                  <div className="h-4 bg-gray-300 rounded-sm w-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ProductSkeleton;
