import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const dataUrl = 'https://api.spacexdata.com/v4/rockets';
export const getRockets = createAsyncThunk('rocket/getRockets', () => fetch(dataUrl)
  .then((res) => res.json())
  .catch((err) => (err)));

const initialState = {
  rockets: [],
  isLoading: true,
};
const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserve: (state, action) => {
      let index = null;
      for (let i = 0; i < state.rockets.length; i += 1) {
        if (state.rockets[i].id === action.payload) {
          index = i;
        }
      }
      for (let i = 0; i < state.rockets.length; i += 1) {
        if (i === index) {
          const newState = state;
          newState.rockets[i].reserved = true;
        }
      }
    },
    cancelReserve: (state, action) => {
      let index = null;
      for (let i = 0; i < state.rockets.length; i += 1) {
        if (state.rockets[i].id === action.payload) {
          index = i;
        }
      }
      for (let i = 0; i < state.rockets.length; i += 1) {
        if (i === index) {
          const newState = state;
          newState.rockets[i].reserved = false;
        }
      }
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      const newState = state;
      newState.isLoading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      const newState = state;
      newState.isLoading = false;
      newState.rockets = action.payload;
    },
    [getRockets.rejected]: (state) => {
      const newState = state;
      newState.isLoading = false;
    },
  },
});
export const { reserve, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
