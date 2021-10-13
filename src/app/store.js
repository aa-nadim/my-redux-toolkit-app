import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
    reducer: {
        counter: persistedReducer,
    },
})