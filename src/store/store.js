import { configureStore } from '@reduxjs/toolkit'
import Mode from './slices/modeSlice'
import Favorite from './slices/favoriteSlics'

const store = configureStore({
    reducer: {
        Theme:Mode,
        Favorite:Favorite
    }
})

export default store