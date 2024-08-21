import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";

export const store = configureStore({
  reducer: {
    categories: CategorySlice,
  },
});
