import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onSizeChnage } from '../Redux/HomeSlice';

const Size = () => {


    //object
    const dispatch = useDispatch();

    //get data from store
    const { shoesSize, selectedSize } = useSelector(state => state.home);

    //on Size Change
    const onSizeChange = (e) => {
        const { id } = e.target;
        dispatch(onSizeChnage({ name: id }))
    }

    return (
        <>
            <div className="sizeSection">
                {shoesSize?.length > 0 && shoesSize.map((item, index) => (
                    <div key={index} className={`shoesSize cursor-pointer ${selectedSize == item ? 'activeSize' : ''}`} id={item} onClick={onSizeChange}>
                        {item}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Size;
