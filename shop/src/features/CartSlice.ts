import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";


interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; type: 'plus' | 'minus' }>) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item) {
                if (action.payload.type === 'plus') {
                    item.quantity += 1;
                } else if (action.payload.type === 'minus' && item.quantity > 1) {
                    item.quantity -= 1;
                }
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;