import React, { useEffect, useState } from 'react';
import { AddItemToCart } from '../../store/features/addToCart/addItemToCart';

const ProductCard = ({ id, name, imageKey, description, category, price }) => {
    const [imageError, setImageError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [productImage, setProductImage] = useState(null);

    useEffect(() => {
        const importImage = async () => {
            try {
                const { default: img } = await import(`../../assets/${category}/${imageKey}.jpg`);
                setProductImage(img);
            } catch (error) {
                console.log(`Error loading image: ${error.message}`)
                setImageError(true);
            } finally {
                setLoading(false);
            }
        }

        importImage();
    }, [imageKey]);

    return (
        <div className="product-card relative mx-2 my-3 w-80 bg-[#f5f5ef] shadow-md">
            {loading ? (<p>Loading...</p>) : ( 
            <div>
                <div className="image-card p-4">
                    {imageError ? (<p>Error Loading..</p>)
                    : (
                        <img 
                            src={productImage}
                            alt={name} 
                            style={{ width: '400px', height: '240px' }}/>
                    )}
                </div>
                <div className="content-card">
                    <div className="title text-center font-bold">{name}</div>
                    
                    <div className="bottom-card flex object-bottom">
                        <div className="text-center p-2 m-2 bg-[#d5dee2] rounded-lg w-1/2">{price}MYR</div>
                        <AddItemToCart id={id} name={name} price={price}></AddItemToCart>
                    </div>
                </div> 
            </div>
            )}
        </div>
    );
};

export default ProductCard;
