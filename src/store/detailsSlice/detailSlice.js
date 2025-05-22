import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: null,
  status: "idle",
  error: null,
};

export const getDetails = createAsyncThunk(
  "detailsSlice/getDetails",
  async (type, id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${type}/${id}`);
    const result = await res.json();

    return result;
  }
);

const detailsSlice = createSlice({
  name: "detailsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload;
      })
      .addCase(getDetails.rejected, (state) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default detailsSlice.reducer;
