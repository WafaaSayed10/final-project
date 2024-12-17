import { configureStore } from '@reduxjs/toolkit'
import Mode from './slices/modeSlice'

const store = configureStore({
    reducer: {
        Theme:Mode
    }
})

export default store