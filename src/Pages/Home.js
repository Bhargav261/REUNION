import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Home = () => {


    const clickOnFilter = () => {
        var element = document.getElementById("toggleLeft");
        var element2 = document.getElementById("overlay");
        element.classList.add("active");
        element2.classList.add("overlay");
    }

    return (
        <div className="dashboard">
            <div className='filterView'>
                <button className='filterButton' onClick={clickOnFilter}><i className='fa fa-filter filterIcon'></i></button>
            </div>
            <div className='leftSlider'>
                <LeftSide />
            </div>
            <RightSide />
        </div>
    )
}

export default Home;