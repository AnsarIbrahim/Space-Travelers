import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const dataUrl = 'https://api.spacexdata.com/v4/rockets';

export const getMissions = createAsyncThunk('mission/getMissions', () => fetch(dataUrl)
  .then((res) => res.json())
  .catch((err) => (err)));

const initialState = {
  missions: [],
  isLoading: true,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    reserveMission: (state, action) => {
      let index = null;
      for (let i = 0; i < state.missions.length; i += 1) {
        if (state.missions[i].id === action.payload) {
          index = i;
        }
      }

      for (let i = 0; i < state.missions.length; i += 1) {
        if (i === index) {
          state.missions[i].reserved = true;
        }
      }
    },
    cancelMission: (state, action) => {
      let index = null;
      for (let i = 0; i < state.missions.length; i += 1) {
        if (state.missions[i].id === action.payload) {
          index = i;
        }
      }

      for (let i = 0; i < state.missions.length; i += 1) {
        if (i === index) {
          state.missions[i].reserved = false;
        }
      }
    },
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.isLoading = true;
    },
    [getMissions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
    },
    [getMissions.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { reserveMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
