import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { SectionV2Wrapper } from "./style";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  //定义初始页面数据
  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);

  // 父传子的回调函数(使用useCallBack进行性能优化)
  const tabClickHandle = useCallback(function (index, item) {
    //对当前数据进行过滤
    setName(item);
  }, []);
  return (
    <SectionV2Wrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemWidth="33.33%"
      ></SectionRooms>
      <SectionFooter name={name}></SectionFooter>
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
