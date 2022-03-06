import React, { useState, useRef, useCallback } from 'react';
import Input from '../Common.js/Input';
import { debounce } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { onSearchChange } from '../Redux/HomeSlice';

const Header = () => {

    //Manage Ref and Object
    const searchRef = useRef();

    //Manage State
    const [search, setSearch] = useState("");

    //object
    const dispatch = useDispatch();

    //get data from store
    const { shoesSearch } = useSelector(state => state.home);

    //Functions

    //Search Change Event
    const onHandleChnage = (e) => {
        const { name, value } = e.target;
        let lowerCaseValue = value.toLowerCase();
        // const searchData = copyData.filter(item => item.name.toLowerCase().includes(lowerCaseValue));
        setSearch(value);
        debouncedSave(value);
    }

    //Debounce Change
    const debouncedSave = useCallback(
        debounce(nextValue =>
            dispatch(onSearchChange({nextValue}))
            , 500),
        [],
    );

    return (
        <div className='boxHeader'>
            <div className="compnayLogo">
                <h1>Shoe.</h1>
            </div>
            <div className="searchBox mr-20">
                <Input type="searchBox" name="search" onChange={onHandleChnage} value={search} label="Search Your Shoes" />
            </div>
        </div>
    )
}

export default Header;