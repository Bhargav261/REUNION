import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../Redux/HomeSlice';

export default configureStore({
    reducer: {
        home: homeReducer,
    },
});

