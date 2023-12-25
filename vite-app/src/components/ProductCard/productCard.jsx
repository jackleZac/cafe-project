import React, { useEffect, useState } from 'react';
import { AddItemToCart } from '../../store/features/handleCart/addItemToCart';

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
                <div className="image-card">
                    {imageError ? (<p>Error Loading..</p>)
                    : (
                        <img 
                            src={productImage}
                            alt={name} 
                            style={{ width: '250px', height: '200px' }}
                            className="mx-auto mt-4"/>
                    )}
                </div>
                <div className="content-card">
                    <div className="title text-center font-bold">
                        <h1 className="m-4">{name}</h1>
                    </div>
                    <div className="bottom-card flex object-bottom">
                        <div className="text-center p-2 m-2 w-1/2">${price}</div>
                        <AddItemToCart id={id} name={name} price={price}></AddItemToCart>
                    </div>
                </div> 
            </div>
            )}
        </div>
    );
};

export default ProductCard;
