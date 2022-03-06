import React, { useState, useCallback } from 'react'
import Input from '../Common/Input';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { onSearchChange, onClearSearch } from '../Redux/HomeSlice';


const Search = () => {

    //Manage State
    const [search, setSearch] = useState("");

    //object
    const dispatch = useDispatch();

    //Functions

    //Search Change Event
    const onHandleChnage = (e) => {
        const { value } = e.target;
        let lowerCaseValue = value.toLowerCase();
        setSearch(value);
        debouncedSave(lowerCaseValue);
    }

    //Debounce Change
    const debouncedSave = useCallback(
        debounce(nextValue =>
            dispatch(onSearchChange({ nextValue }))
            , 500),
        [],
    );

    //Clear Search
    const onSearchClear = () => {
        setSearch("");
        dispatch(onClearSearch())
    }


    return (
        <>
            <Input type="searchBox" name="search" onSearchClear={onSearchClear} onChange={onHandleChnage} value={search} label="Search Your Shoes" />
        </>
    )
}

export default Search;
