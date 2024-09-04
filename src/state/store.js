import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './news/news.slice'
import filterReducer from './filters/filters.slice'

export const store = configureStore({
    reducer: {
        news: newsReducer,
        filters: filterReducer
    }
})