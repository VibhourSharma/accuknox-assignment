import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "@/redux/CategorySlice";

export const store = configureStore({
  reducer: {
    categories: CategoryReducer,
  },
});
