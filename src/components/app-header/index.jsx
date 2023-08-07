import React, { memo } from "react";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import HeaderCenter from "./c-cpns/header.center";
import { HeaderWrapper } from "./style";

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  );
});

export default AppHeader;
