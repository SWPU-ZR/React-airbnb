import React, { memo } from "react";
import { styleStrToObj } from "./utils";

const IconArrowLeft = memo((props) => {
  const { width = 12, height = 12 } = props;

  return (
    <svg
      viewBox="0 0 18 18"
      role="img"
      aria-hidden="false"
      aria-label="previous"
      focusable="false"
      // React中的svg的style必须是一个对象，不能是字符串
      style={styleStrToObj(
        `height: ${height}px; width: ${width}px; display: block; fill: currentcolor;`
      )}
    >
      <path
        d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
        // 必须要驼峰式命名
        fillRule="evenodd"
      ></path>
    </svg>
  );
});

export default IconArrowLeft;
