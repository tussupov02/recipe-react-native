import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecipesByCategory } from "../lib/getRecipesByCategory";

const initialState = {
  recipes: [],
  loaded: false,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (name) => {
    const res = await getRecipesByCategory(name);
    return res;
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loaded = false;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload.meals;
        // console.log(action.payload);
        state.loaded = true;
      });
  },
});
export default recipesSlice.reducer;
