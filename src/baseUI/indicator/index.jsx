import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();

  useEffect(() => {
    // 获取selectIndex对应的item以及相应的数据
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemOffsetLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    // 拿到content的宽度以及可滚动的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScrollWidth = contentRef.current.scrollWidth;
    // 获取selectIndex要滚动的距离
    let distance = itemOffsetLeft + itemWidth * 0.5 - contentWidth * 0.5;

    // 左边居中的特殊情况处理
    if (distance < 0) distance = 0;
    // 右边居中的特殊情况处理
    const totalDistance = contentScrollWidth - contentWidth;
    if (distance > totalDistance) distance = totalDistance;

    // 注意：- 号要写在${}内部
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
