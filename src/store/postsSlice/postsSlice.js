import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  status: "idle",
  error: null,
};

export const getPosts = createAsyncThunk("postsSlice/getPosts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();

  return result.slice(0, 10);
});

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = 'failed';
        state.error = action.error.message
      })
  }
});

export default postsSlice.reducer;
