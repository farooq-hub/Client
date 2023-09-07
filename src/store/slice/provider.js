import {createSlice}  from '@reduxjs/toolkit';

const initialState = {
    role:null,
    token:null,
    providerData:null
};

export const providerAuthSlice = createSlice({
    name: "providerAuth",
    initialState,
    reducers: {
        providerLogin: (state, action) => {
            state.role = action.payload.role;
            state.providerData = action.payload.providerData;
            state.token = action.payload.token;
        },

        providerLogout: (state) => {
            state.role = null;
            state.providerData = null;
            state.token = null;
        }
    }
});

export const { providerLogin, providerLogout } = providerAuthSlice.actions;
export default providerAuthSlice.reducer;
