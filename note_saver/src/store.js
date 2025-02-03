import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "../src/redux/Pasteslice";
export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
