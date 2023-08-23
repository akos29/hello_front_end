import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreetings = createAsyncThunk('greeting/fetchGreetings', async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/random_greeting');
    return response.greeting;
  } catch (error) {
    console.error('Error fetching greeting:', error);
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
