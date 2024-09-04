
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    query: '',
    category: '',
    source: '',
    fromDate: '',
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState: () => {
        const storedFilters = JSON.parse(localStorage.getItem('filters'));
        return {
            ...initialState,
            ...storedFilters,
        };
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
        setSource(state, action) {
            state.source = action.payload;
        },
        setDate(state, action) {
            state.fromDate = action.payload;
        }
    }
})

export const { setQuery, setCategory, setSource, setDate } = filtersSlice.actions;
export default filtersSlice.reducer