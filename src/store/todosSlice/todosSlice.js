import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: null,
  status: "idle",
  error: null,
};

export const getTodos = createAsyncThunk("todosSlice/getTodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await res.json();

  return result.slice(0, 10);
});

const todosSlice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state) => {
        state.status = 'failed';
        state.error = action.error.message
      })
  }
});

export default todosSlice.reducer;
