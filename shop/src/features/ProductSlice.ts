import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/productApi";
import type { ProductState } from "../types/product";


const initialState: ProductState = {
    items: [],
    loading: false,
    error: null
};

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (limit: number) => {
        return await getProducts(limit)
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'error';
            });
    },
});

export default productSlice.reducer;