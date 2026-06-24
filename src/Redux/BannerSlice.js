import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
  name: "poster",
  initialState: {
    loading: false, // Changed from null to false for better boolean handling
    result: [],
    error: null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null; // Clear previous errors when starting a new request
    },
    setResult: (state, action) => { // Added 'action' parameter
      state.result = action.payload; // Assign payload to state
      state.loading = false;
    },
    setError: (state, action) => { // Added 'action' parameter
      state.error = action.payload; // Assign error message to state
      state.loading = false;
    },
  },
});

export const { setError, setLoading, setResult } = bannerSlice.actions;
export default bannerSlice.reducer;