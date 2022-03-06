import React from 'react';
import Search from '../Common/Search';

const Header = () => {

    return (
        <div className='boxHeader'>
            <div className="compnayLogo">
                <h1>Shoe.</h1>
            </div>
            <div className="searchBox mr-20">
                <Search />
            </div>
        </div>
    )
}

export default Header;