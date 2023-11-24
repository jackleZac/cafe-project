import React, { useEffect, useState } from 'react';


const ProductCard = ({ id, name, imageKey, description, category, price }) => {
    const [productImage, setProductImage] = useState(null);

    useEffect(() => {
        const importImage = async () => {
            const { default: img } = await import(`../../assets/${category}/${imageKey}.jpg`);
            return img;
        };

        importImage()
        .then((data) => setProductImage(data))
        .catch((error) => console.error(`Error loading image: ${error.message}`));
    }, [imageKey]);

    return (
        <div className="product-card relative mx-2 my-3 w-1/4 bg-[#f5f5ef] shadow-md">
            <div className="image-card p-4">
                <img 
                 src={productImage}
                 alt={name} />
            </div>
            <div className="content-card">
                <div className="title text-center font-bold">{name}</div>
                <div className="details text-left p-2">{description}</div>
                <div className="bottom-card flex mb-0">
                    <div className="cost text-center p-2 m-2 bg-[#d5dee2] rounded-lg w-1/2">{price}MYR</div>
                    <div className="purchase text-center p-2 m-2 bg-[#d5dee2] rounded-lg w-1/2">ORDER</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
