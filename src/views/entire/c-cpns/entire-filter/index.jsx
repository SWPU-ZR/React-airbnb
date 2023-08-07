import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(item) {
    const newItems = [...selectItems];

    if (newItems.includes(item)) {
      //item重复了，移除出去
      // 拿到item的索引
      const itemIndex = newItems.findIndex((filterItem) => filterItem === item);
      newItems.splice(itemIndex, 1);
    } else {
      // item没有重复，添加进去
      newItems.push(item);
    }

    setSelectItems(newItems);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
