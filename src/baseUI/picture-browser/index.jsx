import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconClose from "@/assets/svg/icon-close";
import PropTypes from "prop-types";
import isProValid from "@emotion/is-prop-valid";
import React, { memo, useEffect, useState } from "react";
import { BrowserWrapper } from "./style";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { StyleSheetManager } from "styled-components";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import Indicator from "../indicator";
import classNames from "classnames";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick, selectIndex } = props;

  //   定义组件内部的状态
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);

  // 当图片浏览器显示时，应该使窗口的滚动功能消失
  useEffect(() => {
    setCurrentIndex(selectIndex);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectIndex]);

  //   事件监听的逻辑
  function closeBtnClickHandle() {
    if (closeClick) closeClick();
  }

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;

    setCurrentIndex(newIndex);
    setIsNext(isNext);
  }

  function bottomItemClickHandle(index) {
    setCurrentIndex(index);
    setIsNext(index > currentIndex);
  }

  return (
    <StyleSheetManager shouldForwardProp={isProValid}>
      <BrowserWrapper isNext={isNext} showList={showList}>
        <div className="top">
          <div className="close-btn" onClick={(e) => closeBtnClickHandle()}>
            <IconClose></IconClose>
          </div>
        </div>
        <div className="swiper">
          <div className="control">
            <div
              className="btn left"
              onClick={(e) => controlClickHandle(false)}
            >
              <IconArrowLeft width="77" height="77"></IconArrowLeft>
            </div>
            <div
              className="btn right"
              onClick={(e) => controlClickHandle(true)}
            >
              <IconArrowRight width="77" height="77"></IconArrowRight>
            </div>
          </div>
          <div className="pictures">
            <SwitchTransition mode="in-out">
              <CSSTransition
                key={pictureUrls[currentIndex]}
                classNames="pic"
                timeout={150}
              >
                <img src={pictureUrls[currentIndex]} alt="" />
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
        <div className="preview">
          <div className="info">
            <div className="desc">
              <div className="count">
                <span>
                  {currentIndex + 1}/{pictureUrls.length}
                </span>
                <span>room apartment图片{currentIndex + 1}</span>
              </div>

              <div className="toggle" onClick={(e) => setShowList(!showList)}>
                <span>{showList ? "隐藏" : "显示"}照片列表</span>
                {showList ? (
                  <IconTriangleArrowBottom></IconTriangleArrowBottom>
                ) : (
                  <IconTriangleArrowTop></IconTriangleArrowTop>
                )}
              </div>
            </div>

            <div className="list">
              <Indicator selectIndex={currentIndex}>
                {pictureUrls.map((item, index) => {
                  return (
                    <div
                      className={classNames("item", {
                        active: currentIndex === index,
                      })}
                      key={item}
                      onClick={(e) => bottomItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </Indicator>
            </div>
          </div>
        </div>
      </BrowserWrapper>
    </StyleSheetManager>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
  selectIndex: PropTypes.number,
};

export default PictureBrowser;
