import React, { useState } from 'react';
import PriceRange from '../Common/PriceRange';
import Category from '../Common/Category';
import ShoesSize from '../Common/Size';

const LeftSide = () => {

    //Manage State
    const [categoryStatus, setCategoryStatus] = useState(true);
    const [priceRangeStatus, setPriceRangeStatus] = useState(true);
    const [sizeStatus, setSizeStatus] = useState(true);

    //on Chnage Category Status
    const openHideDrop = (type) => {
        if (type == 'category') {
            setCategoryStatus(!categoryStatus);
        } else if (type == "priceRange") {
            setPriceRangeStatus(!priceRangeStatus);
        } else if (type == "size") {
            setSizeStatus(!sizeStatus);
        }
    }

    //Close Modal in Mobile View
    const closeModal = () => {
        var element = document.getElementById("toggleLeft");
        element.classList.remove("active");
    }

    return (
        <>
            <div className="leftBar" id="toggleLeft">
                <div className='modalClose'>
                    <div className='justify-content-end'>
                        <button className='closeIcons' onClick={closeModal}>
                            <i className='fa fa-times font-15'></i>
                        </button>
                    </div>
                    <div className="divedier"></div>
                </div>
                <div className="leftbarHeight">
                    <div>
                        <div className="cursor-pointer justify-space-between" onClick={() => openHideDrop('category')}>
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
                                    <Category />
                                </>
                            )
                        }
                    </div>
                    <div className="divedier"></div>
                    <div>
                        <div className="cursor-pointer justify-space-between" onClick={() => openHideDrop('priceRange')}>
                            <div className="sizeLabel">Price Range</div>
                            <div className="align-items-center">
                                {priceRangeStatus ? (
                                    <i className="fa fa-chevron-up"></i>
                                ) : (
                                    <i className="fa fa-chevron-down"></i>
                                )}
                            </div>
                        </div>
                        {
                            priceRangeStatus && (
                                <>
                                    <div className="divedier"></div>
                                    <PriceRange />
                                </>
                            )
                        }
                    </div>
                    <div className="divedier"></div>
                    <div>
                        <div className="cursor-pointer justify-space-between" onClick={() => openHideDrop('size')}>
                            <div className="sizeLabel">Size</div>
                            <div className="align-items-center">
                                {sizeStatus ? (
                                    <i className="fa fa-chevron-up"></i>
                                ) : (
                                    <i className="fa fa-chevron-down"></i>
                                )}
                            </div>
                        </div>
                        {
                            sizeStatus && (
                                <>
                                    <div className="divedier"></div>
                                    <ShoesSize />
                                </>
                            )
                        }
                        <div className="divedier"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSide;