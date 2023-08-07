import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import detailReducer from "./modules/detail";

const store = configureStore({
  reducer: {
    //RTK配置的reducer
    home: homeReducer,
    detail: detailReducer,

    //普通配置的reducer
    entire: entireReducer,
  },
});

export default store;
