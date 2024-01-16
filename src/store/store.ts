import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './homeSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type {  RootState, AppDispatch } from '../hooks/useFetch'

export const store = configureStore({
    reducer: {
        home: homeSlice,
    },
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector