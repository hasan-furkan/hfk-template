import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('user') || false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state) => {
      state.user = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
