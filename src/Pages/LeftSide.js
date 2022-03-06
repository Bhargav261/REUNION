import React, { useState } from 'react';
import Input from '../Common/Input';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { onSelectCategory, onPriceRange, onSizeChnage } from '../Redux/HomeSlice';

const LeftSide = () => {

    //Manage State
    const [categoryStatus, setCategoryStatus] = useState(true);

    //object
    const dispatch = useDispatch();

    //get data from store
    const { category, shoesSize, selectedCategory, priceRange, selectedSize } = useSelector(state => state.home);

    //on Chnage Category Status
    const categoryView = () => {
        setCategoryStatus(!categoryStatus)
    }

    //On CheckBox Change Event
    const onCheckboxChange = (e) => {
        const { name, value } = e.target;
        let check = e.target.checked;
        dispatch(onSelectCategory({ name, check }))
    }

    //On Price Chnage
    const onRangeChange = (value) => {

        dispatch(onPriceRange({ value }));
    }

    //on Size Change
    const onSizeChange = (e) => {
        const { id, name, value } = e.target;
        dispatch(onSizeChnage({ name: id }))
    }

    return (
        <>
            <div className="leftBar">
                <div className="leftbarHeight">
                    <div>
                        <div className="cursor-pointer justify-space-between" onClick={categoryView}>
                            <div className="sizeLabel">Categories</div>
                            <div className="align-items-center">
                                {categoryStatus ? (
                                    <i className="fa fa-chevron-up"></i>
                                ) : (
                                    <i className="fa fa-chevron-down"></i>
                                )}
                            </div>
                        </div>
                        {
                            categoryStatus && (
                                <>
                                    <div className="divedier"></div>
                                    <div>
                                        {category?.length > 0 && category.map((item, index) => (
                                            <div className="categoryDisplay" key={index}>
                                                <Input type="checkbox" label={item?.label} id={index} name={item?.value} checked={selectedCategory.includes(item?.value)} onChange={onCheckboxChange} />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <div className="divedier"></div>
                    <div>
                        <div className="sizeLabel">Price Range</div>
                        <div className="divedier"></div>
                        <div className='mt-30 mb-30'>
                            <InputRange
                                maxValue={500}
                                minValue={0}
                                step={2}
                                value={priceRange}
                                onChange={onRangeChange} />
                        </div>
                    </div>
                    <div className="divedier"></div>
                    <div>
                        <div className="sizeLabel">Size</div>
                        <div className="sizeSection">
                            {shoesSize?.length > 0 && shoesSize.map((item, index) => (
                                <div key={index} className={`shoesSize cursor-pointer ${selectedSize == item ? 'activeSize' : ''}`} id={item} onClick={onSizeChange}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSide;