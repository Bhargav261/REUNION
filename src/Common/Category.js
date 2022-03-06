import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onSelectCategory } from '../Redux/HomeSlice';
import Input from '../Common/Input';

const Category = () => {


    //object
    const dispatch = useDispatch();

    //get data from store
    const { category, selectedCategory } = useSelector(state => state.home);


    //On CheckBox Change Event
    const onCheckboxChange = (e) => {
        const { name } = e.target;
        let check = e.target.checked;
        dispatch(onSelectCategory({ name, check }))
    }

    return (
        <>
            <div>
                {category?.length > 0 && category.map((item, index) => (
                    <div className="categoryDisplay" key={index}>
                        <Input type="checkbox" label={item?.label} id={index} name={item?.value} checked={selectedCategory.includes(item?.value)} onChange={onCheckboxChange} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Category;
