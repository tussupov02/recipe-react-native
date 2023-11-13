import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../lib/getCategories';

const initialState = {
    activeCategory: '',
    categories: [],
    loaded: false,
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const res = await getCategories();
        return res;
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: { ...initialState },
    reducers: {
        updateActiveCategory(state, action) {
            state.activeCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loaded = false;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload.categories;
                state.activeCategory = action.payload.categories[0].strCategory;
                state.loaded = true;
            });
    },
});

export const { updateActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
