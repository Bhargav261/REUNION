import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { onSortBy } from '../Redux/HomeSlice';

const SortBy = () => {

    //object
    const dispatch = useDispatch();

    //get data from store
    const { sortBy } = useSelector(state => state.home);

    //Functions

    //onSortBy Chnage
    const onSortByChnage = (e) => {
        const { value } = e.target;
        dispatch(onSortBy({ value }));
    }


    return (
        <>
            <select value={sortBy} className="select-form-control" onChange={onSortByChnage}>
                <option value="">Sort Your List</option>
                <option value="sortByPrice">Sort By Price</option>
                <option value="sortByName">Sort By Name</option>
            </select>
        </>
    )
}

export default SortBy;
