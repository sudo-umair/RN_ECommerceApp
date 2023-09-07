import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ICartState, ICartItem} from 'interfaces/store';

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
  totalProducts: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const product = action.payload;
      const item = state.items.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({...product, quantity: 1});
      }
      state.totalProducts++;
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action: PayloadAction<ICartItem>) => {
      const product = action.payload;
      const item = state.items.find(item => item.id === product.id);
      if (item) {
        item.quantity--;
        state.totalProducts--;
        state.totalPrice -= product.price;
      }
    },
    clearCart: state => {
      state.items = [];
      state.totalPrice = 0;
      state.totalProducts = 0;
    },
    increaseQuantity: (state, action: PayloadAction<ICartItem>) => {
      const product = action.payload;
      const item = state.items.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
        state.totalPrice += product.price;
        state.totalProducts++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<ICartItem>) => {
      const product = action.payload;
      const item = state.items.find(item => item.id === product.id);
      if (item) {
        item.quantity--;
        state.totalPrice -= product.price;
        state.totalProducts--;
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
