import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ResultNotFound from '../Common/ResultNotFound';
import ProductView from '../Common/ProductView';
import SortBy from '../Common/SortBy';
import Service from '../Common/Service';


const RightSide = () => {

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
        let filterData = Service.filterResult({ shoesData: shoesList, bySearch: shoesSearch, byCategory: selectedCategory, bySize: selectedSize, bySort: sortBy, priceRange: priceRange })
        setShoes(filterData)
    }, [shoesList, shoesSearch, selectedCategory, selectedSize, sortBy, priceRange])

    return (
        <>
            <div className="rightBar">
                <div className="justify-space-between">
                    <div className='ml-5'>
                        <h1>New Arrivals</h1>
                    </div>
                    <div className="align-items-center">
                        <SortBy />
                    </div>
                </div>
                <div className="viewProduct">
                    {
                        shoes?.length > 0 ?

                            shoes.map((item, index) => (
                                <div key={index}>
                                    <ProductView item={item} index={index} />
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