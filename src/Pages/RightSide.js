import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ResultNotFound from '../Common/ResultNotFound';
import { parseInt } from 'lodash';
import ProductView from '../Common/ProductView';
import SortBy from '../Common/SortBy';


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
        filterResult({ bySearch: shoesSearch, byCategory: selectedCategory, bySize: selectedSize, bySort: sortBy, priceRange: priceRange })
    }, [shoesList, shoesSearch, selectedCategory, selectedSize, sortBy, priceRange])


    //Functions

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
                                <ProductView item={item} index={index} />
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