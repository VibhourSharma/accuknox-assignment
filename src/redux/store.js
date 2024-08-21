import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../redux/CategorySlice";

export const store = configureStore({
  reducer: {
    categories: CategorySlice,
  },
});
