import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'http://localhost:4000/api/random_greeting';

export const fetchGreetings = createAsyncThunk('greeting/fetchGreetings', async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line
    console.error('After Axios request - Error:', error);
    throw error;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',

  initialState: {
    greeting: null,
    status: 'idle',
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greeting = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
