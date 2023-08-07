import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  margin-top: 10px;
  padding: 30px 20px;
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
  /* 加上 > 防止子元素有cover重名造成样式冲突 */
  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
