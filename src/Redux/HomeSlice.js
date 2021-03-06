import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { shoesList } from '../Pages/shoesJSON';

export const slice = createSlice({
    name: 'Home Page Slice',
    initialState: {
        value: 10,
        category: [
            { value: 'flipFlops', label: 'Flip Flops' },
            { value: 'sneakers', label: 'Sneakers' },
            { value: 'laceUpShoes', label: 'Lace-Up Shoes' },
            { value: 'shoeAccessories', label: 'Shoe Accessories' }
        ],
        shoesSize: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
        shoesList: shoesList,
        selectedCategory: [],
        sortBy: "",
        priceRange: {
            min: 0,
            max: 500,
        },
        shoesSearch: '',
        selectedSize: ''
    },
    reducers: {
        onSelectCategory: (state, action) => {

            let { name, check } = action.payload;
            let selectedArray = state.selectedCategory;

            if (check) {
                state.selectedCategory.push(name);
                state.selectedCategory = selectedArray;
            } else {
                let index = selectedArray.indexOf(name);
                selectedArray.splice(index, 1);
                state.selectedCategory = selectedArray;
            }
        },
        onSortBy: (state, action) => {
            let { value } = action.payload;
            state.sortBy = value;
        },
        onPriceRange: (state, action) => {
            let { value } = action.payload;
            state.priceRange = value;
        },
        onSearchChange: (state, action) => {
            let { nextValue } = action.payload;
            state.shoesSearch = nextValue;
        },
        onSizeChnage: (state, action) => {
            let { name } = action.payload;
            
            let selectedArray = state.selectedSize;
            if(selectedArray == name){
                state.selectedSize = "";
            }else{
                state.selectedSize = name;
            }
            // let index = selectedArray.indexOf(name);

            // if (index == -1) {
            //     state.selectedSize.push(name);
            //     state.selectedSize = selectedArray;
            // } else {
            //     selectedArray.splice(index, 1);
            //     state.selectedSize = selectedArray;
            // }
        },
        onClearSearch: (state) => {
            state.shoesSearch = "";
        },
        onImageViewChange: (state, action) => {
            const {imageId, imageIndex} = action.payload;
            let data = state.shoesList;
            let index = data.findIndex(x => x.id === imageId);
            data[index].showImage = imageIndex;
            state.shoesList = data;
        }
    },
    extraReducers: {}
});

export const { onSelectCategory, onSortBy, onPriceRange, onSearchChange, onSizeChnage, onClearSearch, onImageViewChange } = slice.actions;

export default slice.reducer;
