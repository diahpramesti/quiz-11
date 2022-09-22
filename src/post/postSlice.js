import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    entities: [],
    loading: false
}

export const fetchPosts = createAsyncThunk('post/fetchPosts',
    async() => {
    const response = await axios.get(URL)
        return response.data;
})

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPosts.fulfilled, (state, action,) => {
            state.entities.push(...action.payload)
            state.loading = false
        })
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            alert('Ada Kesalahan')
        })
    }
})

export default postSlice.reducer