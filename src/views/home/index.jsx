import { fetchHomeDataAction } from "@/store/modules/home";
import { isEmptyObject } from "@/utils";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./c-cpns/home-banner";
import HomeLongfor from "./c-cpns/home-longfor";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from "./c-cpns/home-section-v3";

import { HomeWrapper } from "./style";

const Home = memo(() => {
  //获取dispatch
  const dispatch = useDispatch();

  //  发起网络请求
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  //从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        {/* 折扣数据 */}
        {isEmptyObject(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>
        )}
        {isEmptyObject(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>
        )}

        {isEmptyObject(longforInfo) && (
          <HomeLongfor infoData={longforInfo}></HomeLongfor>
        )}

        {isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        )}
        {isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
        )}
        {isEmptyObject(plusInfo) && (
          <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>
        )}
      </div>
      <ul></ul>
    </HomeWrapper>
  );
});

export default Home;
