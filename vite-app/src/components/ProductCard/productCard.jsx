import React, { useEffect, useState } from 'react';
import { SpinningCircles } from 'react-loading-icons';
import { AddItemToCart } from '../../redux/handleCart/AddItemToCart';
import { useDispatch } from 'react-redux';

const ProductCard = ({ _id, name, imageKey, description, category, price }) => {
    console.log('ProductCard _id:', _id);
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
        <div className="relative mx-2 my-3 w-48 h-72 bg-white shadow-md max-sm:w-2/3 max-sm:mx-auto ">
            {loading ? (<p>Loading...</p>) : ( 
            <div>
                <div className="image-card">
                    {imageError ? (<SpinningCircles className='bg-[#808080]'/>)
                    : (
                        <img 
                            src={productImage}
                            alt={name} 
                            style={{ w_idth: '170px', height: '140px' }}
                            className="mx-auto mt-4"/>
                    )}
                </div>
                <div className="px-4">
                    <div className="text-center">
                        <h1 className="py-2 text-sm">{name}</h1>
                        {!description ? <p className='h-8'></p> : <p className='h-8 text-center text-xs'>{description}</p>}
                    </div>
                    <div className="text-center flex flex-row">
                        <div className="m-2 font-bold text-2xl p-2 basis-1/2">$ {price}</div>
                        <AddItemToCart _id={_id} name={name} price={price} />
                    </div>
                </div> 
            </div>
            )}
        </div>
    );
};

export default ProductCard;
