import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'Data/Reduces/User';
import navReducer from 'Data/Reduces/Navigation';

const reducerMap = {
    User: userReducer,
    Navigation: navReducer
}

export const store = configureStore({
    reducer: reducerMap
})