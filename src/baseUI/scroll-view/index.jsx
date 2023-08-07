import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  // 记录左、右侧按钮
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  // 记录当前滚动元素的位置索引
  const posIndex = useRef(0);
  // 记录滚动差值
  const ScrollDiffRef = useRef();

  // 组件渲染完毕后，判断是否需要显示右侧按钮
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //可以滚动的最大宽度
    const clientWidth = scrollContentRef.current.clientWidth; //本身占据的宽度
    ScrollDiffRef.current = scrollWidth - clientWidth;

    setShowRight(ScrollDiffRef.current > 0);
  }, [props.children]);

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex.current + 1 : posIndex.current - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newElOffsetLeft = newEl.offsetLeft;

    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
    posIndex.current = newIndex;

    // 判断是否继续显示右侧按钮
    setShowRight(ScrollDiffRef.current > newElOffsetLeft);
    // 判断是否继续显示左侧按钮
    setShowLeft(newElOffsetLeft > 0);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => controlClickHandle(false)}
        >
          <IconArrowLeft></IconArrowLeft>
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlClickHandle(true)}
        >
          <IconArrowRight></IconArrowRight>
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
