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
        <div className="relative mx-2 my-3 w-1/5 h-72 bg-[#f5f5ef] shadow-md">
            {loading ? (<p>Loading...</p>) : ( 
            <div>
                <div className="image-card">
                    {imageError ? (<p>Error Loading..</p>)
                    : (
                        <img 
                            src={productImage}
                            alt={name} 
                            style={{ width: '170px', height: '140px' }}
                            className="mx-auto mt-4"/>
                    )}
                </div>
                <div className="px-4">
                    <div className="text-center">
                        <h1 className="my-2 font-bold">{name}</h1>
                        
                    </div>
                    <div className="text-center flex flex-row">
                        <div className="m-2 font-bold text-2xl p-2 basis-1/2">$ {price}</div>
                        <AddItemToCart id={id} name={name} price={price}></AddItemToCart>
                    </div>
                </div> 
            </div>
            )}
        </div>
    );
};

export default ProductCard;
