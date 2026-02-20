import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/productApi";
import type { ProductState } from "../types/product";


const initialState: ProductState = {
    items: [],
    total: 0,
    loading: false,
    loadingMore: false,
    error: null,
};

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (arg: { limit: number; skip?: number }) => {
        const { limit, skip = 0 } = arg;
        return await getProducts(limit, skip);
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                const skip = action.meta.arg?.skip ?? 0;
                if (skip === 0) {
                    state.loading = true;
                } else {
                    state.loadingMore = true;
                }
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.loadingMore = false;
                const { products, total } = action.payload;
                state.total = total;
                state.items = products;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.loadingMore = false;
                state.error = action.error.message || 'error';
            });
    },
});

export default productSlice.reducer;