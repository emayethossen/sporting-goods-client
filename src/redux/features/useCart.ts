import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import {
    selectCartItems,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    CartItem,
} from './cartSlice';

export const useCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => selectCartItems(state));

    const addItemToCart = (item: CartItem) => {
        dispatch(addToCart(item));
    };

    const removeItemFromCart = (itemId: string) => {
        dispatch(removeFromCart(itemId));
    };

    const updateItemQuantity = (itemId: string, quantity: number) => {
        dispatch(updateCartItemQuantity({ _id: itemId, quantity }));
    };

    return {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
    };
};
