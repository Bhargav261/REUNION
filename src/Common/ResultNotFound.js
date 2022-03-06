import React from 'react';

const ResultNotFound = ({msg}) => {
    return (
        <>
            <div className='loading mt-30'>
                {msg ? msg : 'Result Not Found!!'}
            </div>
        </>
    )
}
export default ResultNotFound;