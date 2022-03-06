import React from 'react';
import Input from '../Common.js/Input';

const Home = () => {
    return (
        <div className="dashboard">
            <div className="leftBar">
                <div>
                    <div className="cursor-pointer justify-space-between">
                        <div className="sizeLabel">Categories</div>
                        <div className="align-items-center"> <i className="fa fa-chevron-down"></i> </div>
                    </div>
                    <div className="divedier"></div>
                    <div>
                        {[...Array(5)].map((item, index) => (
                            <div className="categoryDisplay" key={index}>
                                <Input type="checkbox" label="Black" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="divedier"></div>
                <div>
                    <div className="sizeLabel">Price Range</div>
                    <div>

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
            <div className="rightBar">
                <div>
                    <h1>New Arrivals</h1>
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