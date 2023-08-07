import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { ItemWrapper } from "./style";
import { Carousel, Rate } from "antd";
import { StyleSheetManager } from "styled-components";
import isProValid from "@emotion/is-prop-valid";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/baseUI/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);

  // 获取到Carousel组件
  const slideRef = useRef();

  // 事件处理的逻辑
  function controlClickHandle(isNext = true, event) {
    // 上一个面板/下一个面板
    isNext ? slideRef.current.next() : slideRef.current.prev();

    // 最新的索引
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);

    // 阻止事件冒泡
    event.stopPropagation();
  }

  function itemClickHandle() {
    if (itemClick) {
      itemClick(itemData);
    }
  }

  const pictureEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const swiperEl = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30"></IconArrowLeft>
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30"></IconArrowRight>
        </div>
      </div>

      {/* 指示器 */}
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>

      <Carousel dots={false} ref={slideRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <StyleSheetManager shouldForwardProp={isProValid}>
      <ItemWrapper
        itemWidth={itemWidth}
        verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      >
        <div className="inner" onClick={(e) => itemClickHandle()}>
          {/* 根据接受的参数判断是否展示普通页面或轮播图页面 */}
          {!itemData.picture_urls ? pictureEl : swiperEl}

          {/* 将数据传给元素 */}
          <div className="desc">
            {itemData.verify_info.messages.join(" | ")}
          </div>
          <div className="name">{itemData.name}</div>
          <div className="price">￥{itemData.price}/晚</div>

          <div className="bottom">
            <Rate
              disabled
              allowHalf
              // ?? 前面是undefined或unknown时选择后面的
              value={itemData.star_rating ?? 5}
              style={{ fontSize: "12px", color: "red", marginTop: "-6px" }}
            ></Rate>
            <span className="count">{itemData.reviews_count}</span>
            {itemData.bottom_info && (
              <span className="extra"> · {itemData.bottom_info.content}</span>
            )}
          </div>
        </div>
      </ItemWrapper>
    </StyleSheetManager>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
