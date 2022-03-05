import React, { useState } from 'react';
import Input from '../Common.js/Input';

const Header = () => {

    //Manage State
    const [search, setSearch] = useState("");

    //Functions
    const onHandleChnage = (e) => {
        const {name, value} = e.target;
        setSearch(value);
    }

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