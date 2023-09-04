import {createSlice}  from '@reduxjs/toolkit';

const initialState = {
    role:null,
    name:null,
    token:null,
    providerId:null
};

export const providerAuthSlice = createSlice({
    name: "providerAuth",
    initialState,
    reducers: {
        providerLogin: (state, action) => {
            state.role = action.payload.role;
            state.name = action.payload.name;
            state.token = action.payload.token;
            state.providerId = action.payload.providerId;

        },

        providerLogout: (state) => {
            state.role = null;
            state.name = null;
            state.token = null;
            state.providerId = null;
        }
    }
});

export const { providerLogin, providerLogout } = providerAuthSlice.actions;
export default providerAuthSlice.reducer;
