import ProductCard from './productCard';

const ProductList = ({ products }) => {
    return (
        <div className="lg:w-7/9 sm:w-full flex lg:flex-rows max-sm:flex-col flex-wrap gap-1">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
