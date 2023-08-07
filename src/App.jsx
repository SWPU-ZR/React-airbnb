import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import useScrollTop from "./hooks/useScrollTop";
import routes from "./router";

const App = memo(() => {
  // 路由跳转时就滚动到顶部(自定义hook)
  useScrollTop();

  return (
    <div className="app">
      <AppHeader></AppHeader>

      <div className="page">{useRoutes(routes)}</div>

      <AppFooter></AppFooter>
    </div>
  );
});

export default App;
