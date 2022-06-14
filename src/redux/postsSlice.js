import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { parser } from '../parser';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (URL) => {
  const port = 'https://cors-anywhere.herokuapp.com';
  const response = await axios.get(`${port}/${URL}`);
  return parser(response.data);
})

export const postsSLice = createSlice({
  name: 'posts',
  initialState: {
    postItems: undefined,
    status: 'idle',
    error: null
  },
  reducers: {
    editError: (state) => {
      state.error = "invalid url"
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = 'loading';
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.postItems = (action.payload);
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.postItems = undefined;
      state.error = action.error.message;
    })

  }
})




export const { editError } = postsSLice.actions

export default postsSLice.reducer