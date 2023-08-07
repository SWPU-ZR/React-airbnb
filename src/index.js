import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "@/App";
// css引入有顺序问题，注意
import "normalize.css";
import "antd/dist/reset.css";
import "./assets/css/index.less";
import store from "./store";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 路由跳转时调用
  // 注意：Suspense要放在Provider内部，防止某些页面异步加载时，其异步事件无法被监听
  <Provider store={store}>
    <Suspense fallback={<h2>loading~~</h2>}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
);
