import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onSortBy, onImageViewChange } from '../Redux/HomeSlice';
import ResultNotFound from '../Common/ResultNotFound';
import { parseInt } from 'lodash';

const RightSide = () => {

    //object
    const dispatch = useDispatch();

    //Manage State
    const [shoes, setShoes] = useState([]);

    //get data from store
    const { shoesList, sortBy, shoesSearch, selectedSize, selectedCategory, priceRange } = useSelector(state => state.home);

    //useeffect

    //Store Shoes Data in state
    useEffect(() => {
        if (shoesList?.length > 0) {
            setShoes(shoesList);
        }
    }, [shoesList])

    //Call Filter Function When Parametter Change
    useEffect(() => {
        filterResult({ bySearch: shoesSearch, byCategory: selectedCategory, bySize: selectedSize, bySort: sortBy, priceRange: priceRange })
    }, [shoesList, shoesSearch, selectedCategory, selectedSize, sortBy, priceRange])


    //Functions

    //onSortBy Chnage
    const onSortByChnage = (e) => {
        const { name, value } = e.target;
        dispatch(onSortBy({ value }));
    }

    //on Image View Click
    const onImageViewClick = (e, imageId) => {
        const { id } = e.target;
        dispatch(onImageViewChange({ imageId, imageIndex: id }));
    }

    //Filter Result 
    const filterResult = ({ bySearch, byCategory, bySize, bySort }) => {

        if (bySearch || byCategory?.length > 0 || bySize || bySort || priceRange) {

            let filterData = shoesList;

            if (bySearch) {
                filterData = filterData.filter(item => item.name.toLowerCase().includes(shoesSearch) || item.title.toLowerCase().includes(shoesSearch));
            }

            if (byCategory?.length > 0) {
                filterData = filterData.filter(item => selectedCategory?.includes(item.category));
            }

            if (bySize) {
                filterData = filterData.filter(item => item.avalSize?.includes(parseInt(selectedSize)));
            }


            if (sortBy) {
                if (sortBy == "sortByPrice") {
                    filterData = filterData.slice().sort((a, b) => (parseInt(a.price) > parseInt(b.price)) ? 1 : ((parseInt(b.price) > parseInt(a.price)) ? -1 : 0));
                } else {
                    filterData = filterData.slice().sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : (b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0);
                }
            }

            filterData = filterData.filter(item => parseInt(item.price) >= parseInt(priceRange?.min) && parseInt(item.price) <= parseInt(priceRange?.max));

            setShoes(filterData);
        } else {
            setShoes(shoesList)
        }
    }

    return (
        <>
            <div className="rightBar">
                <div className="justify-space-between">
                    <div className='align-items-center'>
                        {/* <div className='filterView'>
                            <button className='filterButton'><i className='fa fa-filter filterIcon'></i></button>
                        </div> */}
                        <div className='ml-5'>
                            <h1>New Arrivals</h1>
                        </div>
                    </div>
                    <div className="align-items-center">
                        <select value={sortBy} className="select-form-control" onChange={onSortByChnage}>
                            <option value="">Sort Your List</option>
                            <option value="sortByPrice">Sort By Price</option>
                            <option value="sortByName">Sort By Name</option>
                        </select>
                    </div>
                </div>
                <div className="viewProduct">
                    {
                        shoes?.length > 0 ?

                            shoes.map((item, index) => (
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
                                            {/* <div className='imagePart imageBorder'>
                                        <img src="Images/shoes.jpg" alt="" className="smallImage" />
                                    </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <>
                                <ResultNotFound />
                            </>
                    }

                </div>
            </div>
        </>
    )
}

export default RightSide;