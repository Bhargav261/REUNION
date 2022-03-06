import React, { useState } from 'react';
import Input from '../Common.js/Input';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

const Home = () => {

    //Manage State
    const [categoryStatus, setCategoryStatus] = useState(true);
    const [priceRange, setpriceRange] = useState({
        min: 20,
        max: 40,
    });

    //on Chnage Category Status
    const categoryView = () => {
        setCategoryStatus(!categoryStatus)
    }

    return (
        <div className="dashboard">
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
                                        {[...Array(5)].map((item, index) => (
                                            <div className="categoryDisplay" key={index}>
                                                <Input type="checkbox" label="Black" id={index} />
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
                                maxValue={100}
                                minValue={0}
                                step={2}
                                value={priceRange}
                                onChange={value => setpriceRange(value)} />
                        </div>
                    </div>
                    <div className="divedier"></div>
                    <div>
                        <div className="sizeLabel">Size</div>
                        <div className="sizeSection">
                            {[...Array(10)].map((item, index) => (
                                <div key={index} className="shoesSize">
                                    35
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightBar">
                <div className="justify-space-between">
                    <h1>New Arrivals</h1>
                    <div className="align-items-center">
                        <select className="select-form-control">
                            <option>Sort By Price</option>
                            <option>Sort By Price</option>
                            <option>Sort By Price</option>
                            <option>Sort By Price</option>
                        </select>
                    </div>
                </div>
                <div className="viewProduct">
                    {[...Array(10)].map((item, index) => (
                        <div key={index} className="productBox">
                            <div className="smallLine"></div>
                            <div className="lightText">High Speed Sneakers</div>
                            <div className="darkText">Balenciaga</div>
                            <div className="imagePart">
                                <img src="Images/shoes.jpg" alt="" className="bigImage" />
                            </div>
                            <div className="justify-space-between">
                                <div className="priceSection">
                                    <div className="productPriceLabel">Price</div>
                                    <div className="productPrice">$ 790</div>
                                </div>
                                <div className="flex">
                                    <div className='imagePart imageBorder'>
                                        <img src="Images/shoes.jpg" alt="" className="smallImage" />
                                    </div>
                                    <div className='imagePart imageBorder'>
                                        <img src="Images/shoes.jpg" alt="" className="smallImage" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Home;