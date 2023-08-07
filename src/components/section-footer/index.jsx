import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheetManager } from "styled-components";
import { FooterWrapper } from "./style";
import isProValid from "@emotion/is-prop-valid";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { name } = props;

  let showMsg = "显示全部";
  if (name) {
    showMsg = `显示更多${name}房源`;
  }

  // 跳转到详情页
  const navigate = useNavigate();
  function moreClickHandle() {
    navigate("/entire");
  }

  return (
    <StyleSheetManager shouldForwardProp={isProValid}>
      <FooterWrapper color={name ? "#00848A" : "#000"}>
        <div className="info" onClick={(e) => moreClickHandle()}>
          <span className="text">{showMsg}</span>
          <IconMoreArrow></IconMoreArrow>
        </div>
      </FooterWrapper>
    </StyleSheetManager>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
