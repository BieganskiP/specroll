import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "./hamburgerSlice";
import modalReducer from "./modalSlice";
import scrollReducer from "./scrollSlice";

const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
    modal: modalReducer,
    scroll: scrollReducer,
  },
});

export default store;
