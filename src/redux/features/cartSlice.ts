import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the CartItem type
interface CartItem {
  _id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  stockQuantity: number;
  rating: number;
  image: string;
  quantity: number;
}

// Define the initial state of the cart
interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(item => item._id === action.payload._id);
      if (itemIndex >= 0) {
        // Item already exists in the cart, increase quantity
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        // Item does not exist in the cart, add new item
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ _id: string; quantity: number }>) => {
      const item = state.items.find(item => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions;

// Export the selector
export const selectCartItems = (state: RootState) => state.cart.items;

// Export the reducer
export default cartSlice.reducer;
