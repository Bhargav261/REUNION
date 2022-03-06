import React from 'react'
import { useDispatch } from 'react-redux';
import { onImageViewChange } from '../Redux/HomeSlice';


const ProductView = ({ index, item }) => {

    //object
    const dispatch = useDispatch();

    //on Image View Click
    const onImageViewClick = (e, imageId) => {
        const { id } = e.target;
        dispatch(onImageViewChange({ imageId, imageIndex: id }));
    }

    return (
        <>
            <div key={index} className="productBox">
                <div className="smallLine"></div>
                <div className="lightText">{item.title}</div>
                <div className="darkText">{item?.name}</div>
                <div className="imagePart">
                    <img src={item?.images[item?.showImage]} alt="" className="bigImage" />
                </div>
                <div className="justify-space-between">
                    <div className="priceSection">
                        <div className="productPriceLabel">Price</div>
                        <div className="productPrice">$ {item?.price}</div>
                    </div>
                    <div className="flex">
                        {item?.images?.length > 0 && item?.images?.map((kitem, kindex) => (
                            <div className='imagePart imageBorder' key={kindex}>
                                <img src={kitem} alt="" className="smallImage" id={kindex} onClick={(e) => onImageViewClick(e, item?.id)} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductView;
