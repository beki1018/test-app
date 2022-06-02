import { createSlice } from "@reduxjs/toolkit";

export const eventSliceTwo = createSlice({
  name: "eventsStore",
  initialState: {
    eventOnEdit: null,
  },
  reducers: {
    setEventOnEdit: (state, action) => {
        state.eventOnEdit = action.payload;
    },
    clearEventOnEdit: (state) => {
        state.eventOnEdit = null;
    }
  },
});
export const {setEventOnEdit, clearEventOnEdit } = eventSliceTwo.actions;

export default eventSliceTwo.reducer;
