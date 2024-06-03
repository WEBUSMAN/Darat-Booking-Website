import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const API_ENDPOINT_ANOTHER = 'https://jsonplaceholder.typicode.com/anotherEndpoint';

export const loginUserAsync = createAsyncThunk('auth/loginUser', async (data) => {
    try {
        const response = await axios.post(API_ENDPOINT, data);
        return response.data;
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
});

export const forgetpasswordAsync = createAsyncThunk('auth/signupUser', async (data, { dispatch }) => {
    try {
        const response = await axios.post(API_ENDPOINT_ANOTHER, data);
        dispatch(forgetSuccess(response.data));
        return response.data;
    } catch (error) {
        dispatch(forgetFailure(error.message));
        throw error;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
    },
    reducers: {
        // loginSuccess: (state, action) => {
        //     state.isAuthenticated = true;
        //     state.user = action.payload;
        // },
        // loginFailure: (state, action) => {
        //     state.loading = false;
        // },
        forgetSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.forget = action.payload;
        },
        forgetFaiure: (state, action) => {
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(forgetpasswordAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(forgetpasswordAsync.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(forgetpasswordAsync.rejected, (state, action) => {
                state.loading = false;
            });
    },
});

export const { forgetSuccess, forgetFailure } = authSlice.actions;
export default authSlice.reducer;
