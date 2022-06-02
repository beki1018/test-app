import { createSlice } from "@reduxjs/toolkit";
import getDate from "./utils";

export const eventSlice = createSlice({
  name: "eventsStore",
  initialState: {
    events: [
      {
        date: getDate(new Date(2022, 5, 29)),
        description: "description",
      },
      {
        date: getDate(new Date(2022, 5, 29)),
        description: "description",
      },
      {
        date: getDate(new Date(2022, 5, 29)),
        description: "description",
      },
    ],
    isEventEdit: false,
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    clearEvents: (state) => {
      state.events = [];
    },
    changeEdit: (state,action) => {
        state.isEventEdit = action.payload;
    } 
  },
});
export const { addEvent, clearEvents, changeEdit } = eventSlice.actions;

export default eventSlice.reducer;
