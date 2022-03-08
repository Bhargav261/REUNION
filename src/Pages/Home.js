import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Home = () => {

    return (
        <div className="dashboard">
            <div className='leftSlider'>
                <LeftSide />
            </div>
            <RightSide />
        </div>
    )
}

export default Home;