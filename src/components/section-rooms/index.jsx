import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props;

  return (
    <RoomsWrapper>
      {
        // 只展示前八条数据
        roomList?.slice(0, 8)?.map((item) => (
          <RoomItem
            key={item.id}
            itemData={item}
            itemWidth={itemWidth}
          ></RoomItem>
        ))
      }
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
