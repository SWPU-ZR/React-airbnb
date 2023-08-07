import IconGlobal from "@/assets/svg/icon-global";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";
import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  // 函数组件内部的状态
  const [showPanel, setShowPanel] = useState(false);

  // 副作用代码
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    //组件创建时，开启监听
    window.addEventListener("click", windowHandleClick);
    //组件卸载时，解除监听
    return () => {
      window.removeEventListener("click", windowHandleClick);
    };
  }, []);

  // 事件处理函数
  function profileClickHandle(e) {
    // 阻止事件的冒泡
    e.stopPropagation();
    setShowPanel(!showPanel);
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconProfileMenu></IconProfileMenu>
        <IconProfileAvatar></IconProfileAvatar>

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
