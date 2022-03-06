import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onSortBy } from '../Redux/HomeSlice';

const RightSide = () => {
    //object
    const dispatch = useDispatch();

    //get data from store
    const { shoesList, sortBy } = useSelector(state => state.home);

    //onSortBy Chnage
    const onSortByChnage = (e) => {
        const { name, value } = e.target;

        dispatch(onSortBy(value));

    }

    return (
        <>
            <div className="rightBar">
                <div className="justify-space-between">
                    <h1>New Arrivals</h1>
                    <div className="align-items-center">
                        <select value={sortBy} className="select-form-control" onChange={onSortByChnage}>
                            <option value="sortByPrice">Sort By Price</option>
                            <option value="sortByName">Sort By Name</option>
                        </select>
                    </div>
                </div>
                <div className="viewProduct">
                    {
                        shoesList?.length > 0 ?

                            shoesList.map((item, index) => (
                                <div key={index} className="productBox">
                                    <div className="smallLine"></div>
                                    <div className="lightText">High Speed Sneakers</div>
                                    <div className="darkText">Balenciaga</div>
                                    <div className="imagePart">
                                        <img src={item?.images[0]} alt="" className="bigImage" />
                                    </div>
                                    <div className="justify-space-between">
                                        <div className="priceSection">
                                            <div className="productPriceLabel">Price</div>
                                            <div className="productPrice">$ {item?.price}</div>
                                        </div>
                                        <div className="flex">
                                            {item?.images?.length > 0 && item?.images?.map((item, index) => (
                                                <div className='imagePart imageBorder' key={index}>
                                                    <img src={item} alt="" className="smallImage" />
                                                </div>
                                            ))}
                                            {/* <div className='imagePart imageBorder'>
                                        <img src="Images/shoes.jpg" alt="" className="smallImage" />
                                    </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <div className='loading'>
                                Result Not Found !!
                            </div>
                    }

                </div>
            </div>
        </>
    )
}

export default RightSide;