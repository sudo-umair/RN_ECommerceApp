import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ICartState, ICartItem} from 'interfaces/store';

const initialState: ICartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
      state.total++;
    },
    removeFromCart: (state, action: PayloadAction<ICartItem>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity--;
        state.total--;
      }
    },
    clearCart: state => {
      state.items = [];
      state.total = 0;
    },
    increaseQuantity: (state, action: PayloadAction<ICartItem>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        state.total++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<ICartItem>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity--;
        state.total--;
      }
    },
  },
});

export const {
  addToCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
