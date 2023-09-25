import { createSlice } from "@reduxjs/toolkit";

const tocSlice = createSlice({
    name: 'auth',
    initialState: {
        user:null,
    },
    reducers: {
        setuser: (state, action) => {
            state.user = action.payload;
            window.localStorage.setItem('user', JSON.stringify(action.payload))

        },
        deluser: (state) => {
            state.user = null;
            window.localStorage.removeItem('user');
        },
        getuserfromlocal: (state) => {
            var user = window.localStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                state.user = user;
            }
            else {
                state.user = null;
            }
        }
    }
});
export const { setuser, deluser, getuserfromlocal } = tocSlice.actions;
export default tocSlice.reducer;