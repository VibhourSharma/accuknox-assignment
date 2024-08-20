import { createSlice } from "@reduxjs/toolkit";
import widgetsData from "@/data/widgetsData.json";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: widgetsData.categories,
    selectedCategoryIndex: null,
    isModalOpen: false,
    newWidgetName: "",
  },
  reducers: {
    setModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
    setNewWidgetName(state, action) {
      state.newWidgetName = action.payload;
    },
    selectCategory(state, action) {
      state.selectedCategoryIndex = action.payload;
    },
    addWidget(state) {
      const newWidget = {
        title: state.newWidgetName || "New Widget",
        type: "",
        data: {},
      };

      state.categories[state.selectedCategoryIndex].widgets.push(newWidget);
      state.isModalOpen = false;
      state.newWidgetName = "";
      state.selectedCategoryIndex = null;
    },
    deleteWidget(state, action) {
      const { categoryIndex, widgetIndex } = action.payload;
      state.categories[categoryIndex].widgets.splice(widgetIndex, 1);
    },
    // Add more actions as needed
  },
});

export const {
  setModalOpen,
  setNewWidgetName,
  selectCategory,
  addWidget,
  deleteWidget,
} = categorySlice.actions;

export default categorySlice.reducer;
