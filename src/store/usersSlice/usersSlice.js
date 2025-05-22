import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  status: "idle",
  error: null,
};

export const getUsers = createAsyncThunk("usersSlice/getUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();

  return result.slice(0, 10);
});

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = 'failed';
        state.error = action.error.message
      })
  }
});

export default usersSlice.reducer;
