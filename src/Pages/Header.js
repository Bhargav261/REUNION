import React, { useState, useRef, useCallback } from 'react';
import Input from '../Common/Input';
import { debounce } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { onSearchChange, onClearSearch } from '../Redux/HomeSlice';

const Header = () => {

    //Manage Ref and Object
    const searchRef = useRef();

    //Manage State
    const [search, setSearch] = useState("");

    //object
    const dispatch = useDispatch();

    //Functions

    //Search Change Event
    const onHandleChnage = (e) => {
        const { name, value } = e.target;
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
        <div className='boxHeader'>
            <div className="compnayLogo">
                <h1>Shoe.</h1>
            </div>
            <div className="searchBox mr-20">
                <Input type="searchBox" name="search" onSearchClear={onSearchClear} onChange={onHandleChnage} value={search} label="Search Your Shoes" />
            </div>
        </div>
    )
}

export default Header;