import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { onPriceRange } from '../Redux/HomeSlice';

const PriceRange = () => {

    //object
    const dispatch = useDispatch();

    //get data from store
    const { priceRange } = useSelector(state => state.home);

    //On Price Chnage
    const onRangeChange = (value) => {
        dispatch(onPriceRange({ value }));
    }


    return (
        <>
            <div>
                <div className='mt-30 mb-30'>
                    <InputRange
                        maxValue={500}
                        minValue={0}
                        step={2}
                        value={priceRange}
                        onChange={onRangeChange} />
                </div>

            </div>
        </>
    )
}

export default PriceRange;
