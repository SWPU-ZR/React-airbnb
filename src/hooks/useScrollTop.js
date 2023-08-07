import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTop() {
  const location = useLocation();
  // 监听路由当前路径发生改变时
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
}
