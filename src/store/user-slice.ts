import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: ''
  },
  reducers: {
    getUserName(state, action) {
      state.userName = action.payload;
    }
  }
});

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;
