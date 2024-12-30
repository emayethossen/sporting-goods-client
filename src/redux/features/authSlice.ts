import { createSlice } from '@reduxjs/toolkit';

export interface User {
    name: string;
    _id: string;
    role: 'user' | 'admin';
}

type TAuthState = {
    user: User | null;
    token: string | null;
}

const initialState: TAuthState = {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;

            // Save user and token to localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        },
        logout(state) {
            state.user = null;
            state.token = null;

            // Remove user and token from localStorage
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
