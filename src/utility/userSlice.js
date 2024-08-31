import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { location: null },
  reducers: {
    addUserLocation: (Mstate, action) => {
      const { state, country, postcode, suburb } = action.payload;
      Mstate.location = { state, country, postcode, suburb };
    },
  },
});

export const { addUserLocation } = userSlice.actions;
export default userSlice.reducer;
