import ProductCard from './productCard';

const ProductList = ({ products }) => {
    return (
        <div className="product-list flex mr-4 ml-4">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
