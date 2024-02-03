// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer: {
    // include your reducers here
    app: reducer,
  },
});

export default store;

