import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './eventSlice'
import eventReducerTwo from './eventSliceTwo'


export default configureStore({
  reducer: {
    eventsStore: eventReducer,
    editStore: eventReducerTwo
  }
})
