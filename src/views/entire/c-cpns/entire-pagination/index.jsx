import { fetchRoomListAction } from "@/store/modules/entire/actionsCreators";
import { Pagination } from "antd";
import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PaginationWrapper } from "./style";

const EntirePagination = memo(() => {
  // 从redux中获取数据
  const { roomList, totalCount, currentPage } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
    }),
    shallowEqual
  );

  //   小算法
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  // 事件处理的逻辑
  const dispatch = useDispatch();
  const pageChangeHandle = (page, pageSize) => {
    // 回到顶部
    window.scrollTo(0, 0);
    // 获取页面更新后的数据
    dispatch(fetchRoomListAction(page - 1));
  };

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination
            showSizeChanger={false}
            onChange={pageChangeHandle}
            defaultCurrent={1}
            pageSize={20}
            total={totalCount}
            style={{ color: "red" }}
          />
          <div className="desc">
            第 {startCount} - {endCount} 个房源,共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
